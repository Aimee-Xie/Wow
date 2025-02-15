/*
 * Copyright [2021-present] [ahoo wang <ahoowang@qq.com> (https://github.com/Ahoo-Wang)].
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *      http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

package me.ahoo.wow.projection

import me.ahoo.wow.event.AbstractEventFunctionRegistrar
import me.ahoo.wow.event.DomainEventExchange
import me.ahoo.wow.messaging.function.MessageFunction
import me.ahoo.wow.messaging.function.MultipleMessageFunctionRegistrar
import me.ahoo.wow.messaging.function.SimpleMultipleMessageFunctionRegistrar
import me.ahoo.wow.projection.annotation.projectionProcessorMetadata
import reactor.core.publisher.Mono

class ProjectionFunctionRegistrar(
    actual: MultipleMessageFunctionRegistrar<MessageFunction<Any, DomainEventExchange<*>, Mono<*>>> =
        SimpleMultipleMessageFunctionRegistrar()
) : AbstractEventFunctionRegistrar(actual) {

    fun registerProcessor(processor: Any) {
        processor.javaClass
            .projectionProcessorMetadata()
            .toMessageFunctionRegistry(processor)
            .forEach {
                register(it)
            }
    }
}
