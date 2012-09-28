# Gazzilion.js

[Gazzilion.js](http://lieldulev.github.com/gazzilion.js/ "Gazzilion.js") tries to solve the common problem of displaying the pretty or textual version for numbers.

**Important**: Since development is in early stages **expect API to break**.

## What

It takes numbers in javascript like 21013 and converts them to human readable strings for display like: 

* 21,013 
* 21K
* 21 thousand

## Works everywhere

Old node.js, new node.js and all browsers.

## Planned

* Multilingual support
* Configuration
* More "complex" formats  - currency, date/time, units (metric/imperial) .

## API

    Gazzilion.add_commas(21013); // "21,013"
    Gazzilion.M(315098123); // "315M"
    my_number = 8135432967;
    my_number.to_word(); // "8 billion"

Full API is available in [here](http://lieldulev.github.com/gazzilion.js/ "Gazzilion.js").

## Copyright
2012 © Liel Dulev

## MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


