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

package me.ahoo.wow.compensation.server.dashboard

import org.springframework.boot.autoconfigure.web.WebProperties
import org.springframework.http.ResponseEntity
import org.springframework.stereotype.Controller
import org.springframework.util.ResourceUtils
import org.springframework.web.bind.annotation.GetMapping

@Controller
class DashboardConfiguration(private val webProperties: WebProperties) {
    companion object {
        const val HOME_FILE = "index.html"
    }

    private val homePageContent by lazy {
        val indexFilePath = webProperties.resources.staticLocations.first() + HOME_FILE
        val indexFile = ResourceUtils.getFile(indexFilePath)
        check(indexFile.exists()) { "$HOME_FILE not found in ${indexFile.absolutePath}" }
        indexFile.readBytes()
    }

    @GetMapping(
        *[
            "/",
            "/to-retry",
            "/executing",
            "/next-retry",
            "/non-retryable",
            "/succeeded",
        ],
    )
    fun home(): ResponseEntity<ByteArray> {
        return ResponseEntity.ok()
            .contentType(org.springframework.http.MediaType.TEXT_HTML)
            .body(homePageContent)
    }

}