// |reftest| pref(javascript.options.xml.content,true)
/* -*- Mode: java; tab-width:8; indent-tabs-mode: nil; c-basic-offset: 4 -*- */

/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */


var BUGNUMBER = 370048;
var summary = 'with (obj) function:: with xml lists';
var actual = '';
var expect = '';

printBugNumber(BUGNUMBER);
START(summary);

var list = <></>;

expect = list.function::length;
with (list)
    actual = function::length;

if (expect !== actual)
  throw "function::length does not work under the with statement with an empty xml list";

TEST(1, expect, actual);
END();
