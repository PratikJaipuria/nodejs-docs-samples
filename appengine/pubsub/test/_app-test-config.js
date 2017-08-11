// Copyright 2017, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';

const path = require(`path`);
const uuid = require(`uuid`);

const VERIFICATION_TOKEN = uuid.v4();
const PUBSUB_TOPIC = `integration-test-appengine-pubsub`;

module.exports = {
  cwd: path.resolve(path.join(__dirname, `../`)),

  // This dictionary should override process.env
  env: Object.assign({}, process.env, {
    PUBSUB_VERIFICATION_TOKEN: VERIFICATION_TOKEN,
    PUBSUB_TOPIC: PUBSUB_TOPIC
  })
};