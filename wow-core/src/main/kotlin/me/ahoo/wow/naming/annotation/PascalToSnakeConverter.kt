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

package me.ahoo.wow.naming.annotation

import me.ahoo.wow.api.annotation.Name
import me.ahoo.wow.naming.NamingConverter
import java.util.concurrent.ConcurrentHashMap

object PascalToSnakeConverter {
    private val typeAliases = ConcurrentHashMap<Class<*>, String>()
    fun convert(type: Class<*>): String {
        return typeAliases.computeIfAbsent(type) {
            val name = type.getAnnotation(Name::class.java)
            if (name?.value?.isNotBlank() == true) {
                name.value
            } else {
                NamingConverter.PASCAL_TO_SNAKE.convert(type.simpleName)
            }
        }
    }
}

fun Class<*>.toName(): String {
    return PascalToSnakeConverter.convert(this)
}
