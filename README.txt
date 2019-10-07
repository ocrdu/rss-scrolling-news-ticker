A simple RSS scrolling news ticker

- Put everything in a directory on your webserver;
- Open example.html in your browser; it should show a scrolling ticker (with Dutch news items in it 8-);
- The RSS feed used is set in example.html in the "onload" call.

A working demo (but a very old version with very sloppy code) can be found at http://www.den-uijl.nl/AEX/scroller.html.

Note that: - the scroller stops when the cursor hovers over it, to make it easier to read and to click the links in it;
           - this version can only do one ticker per page, feel free to make it more universal;
           - a small php file is used to get around the same-origin policy. If you don't want to do that, don't use this;
           - there are two interesting tricks in the code that make this much simpler than many other implementations.

If you feel like donating for this, you can do so here: http://ocrdu.nl/donations .