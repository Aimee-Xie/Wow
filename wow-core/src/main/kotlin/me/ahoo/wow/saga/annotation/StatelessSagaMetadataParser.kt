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

package me.ahoo.wow.saga.annotation

import me.ahoo.wow.api.annotation.OnEvent
import me.ahoo.wow.api.annotation.OnStateEvent
import me.ahoo.wow.event.DomainEventExchange
import me.ahoo.wow.messaging.processor.MessageAnnotationFunctionCondition
import me.ahoo.wow.messaging.processor.ProcessorMetadata
import me.ahoo.wow.messaging.processor.ProcessorMetadataParser

object StatelessSagaMetadataParser : ProcessorMetadataParser<DomainEventExchange<*>>(
    MessageAnnotationFunctionCondition(OnEvent::class.java, OnStateEvent::class.java)
)

fun <P : Any> Class<out P>.statelessSagaMetadata(): ProcessorMetadata<P, DomainEventExchange<*>> {
    @Suppress("UNCHECKED_CAST")
    return StatelessSagaMetadataParser.parse(this) as ProcessorMetadata<P, DomainEventExchange<*>>
}

inline fun <reified P : Any> statelessSagaMetadata(): ProcessorMetadata<P, DomainEventExchange<*>> {
    return P::class.java.statelessSagaMetadata()
}
