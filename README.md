# ResponCSS : Respond dynamically

ResponCSS is a fluid responsive CSS layout framework based on a dynamic set of columns. By adding or subtracting columns based on screen width, developers are able to take full advantage of a wide array of screen resolutions and free their web apps from the inflexibility (not to mention cross browser headaches) of pixel driven layouts.


## Columns

As stated above the number of columns changes depending on screen.  This table shows the default settings for ResponCSS.

<table>
    <tr>
        <th>Screens</th>
        <th>Class Prefix</th>
        <th>Target</th>
        <th>Layout width</th>
        <th>Columns</th>
    </tr>
    <tr>
        <td>Small</td>
        <td>.s-</td>
        <td>Smartphones and Portrait Tablets</td>
        <td>768px and below</td>
        <td>4</td>
    </tr>
    <tr>
        <td>Medium</td>
        <td>.m-</td>
        <td>Landscape Tablets</td>
        <td>769px to 979px</td>
        <td>8</td>
    </tr>
    <tr>
        <td>Large</td>
        <td>.l-</td>
        <td>Average Desktops</td>
        <td>980px to 1209px</td>
        <td>12</td>
    </tr>
    <tr>
        <td>Xtra Large</td>
        <td>.xl-</td>
        <td>Large Display Desktops</td>
        <td>1210px and up</td>
        <td>16</td>
    </tr>
</table>

Download the files and open index.html to see ResponCSS in action.

## Components
### Containers | .s-1, .m-6, l-9, .xl-15
Containers are designed to be high level parents in your layout. They can be assigned to span a different number of columns for each screen size.

#### Center | .center
Simply add the class ".center" to center a container.

#### Shortcuts | .qtr, .half, .s-qtr3, .xl-full   
If you know you want a container to span the distance across all screen sizes, you can use one of these shortcuts without assigning a size.

#### Overs | .s-over-2, .over-half
Want to push some containers around? That's what overs are for.


## Block Grids | .s-g-1, .g-6
Block grids are designed to be used when you want a certain number of items per row.  The blocks are floated left and will flow into a grid pattern.  Block grids are available in 1 - 10 blocks per row.


## Bonus LESS Mixins, Variables and CSS Classes
<table class="table table-bordered table-striped">
    <tr>
        <th>LESS</th>
        <th>Class</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>.clearfix()</td>
        <td>.cf</td>
        <td>Make sure container contains floats</td>
    </tr>
    <tr>
        <td>n/a</td>
        <td>.clear</td>
        <td>Applies "clear: both" style</td>
    </tr>
    <tr>
        <td>@c-gutter</td>
        <td>n/a</td>
        <td>Adjusts the ratio of column to gutter width.  Set to 0 for no gutters.</td>
    </tr>
    <tr>
        <td>@g-gutter</td>
        <td>n/a</td>
        <td>Adjusts the ratio of block grid to gutter width.  Set to 0 for no gutters.</td>
    </tr>
    <tr>
        <td>@s-max-width</td>
        <td>n/a</td>
        <td>Max width for small screen media query</td>
    </tr>
    <tr>
        <td>@m-min-width</td>
        <td>n/a</td>
        <td>Min width for medium screen media query</td>
    </tr>
    <tr>
        <td>@m-max-width</td>
        <td>n/a</td>
        <td>Max width for medium screen media query</td>
    </tr>
    <tr>
        <td>@l-min-width</td>
        <td>n/a</td>
        <td>Min width for large screen media query</td>
    </tr>
    <tr>
        <td>@l-max-width</td>
        <td>n/a</td>
        <td>Max width for large screen media query</td>
    </tr>
    <tr>
        <td>@xl-min-width</td>
        <td>n/a</td>
        <td>Min width for extra large screen media query</td>
    </tr>
    <tr>
        <td>@xl-max-width</td>
        <td>n/a</td>
        <td>Max width for extra large screen media query</td>
    </tr>
</table>


## Recommendations
ResponCSS is just a small piece of responsive sweetness, so do yourself a favor and use it with:

* <a href="http://html5boilerplate.com/">HTML5 ★ Boilerplate</a> - A rock-solid default for HTML5 awesome.
* <a href="http://github.com/scottjehl/Respond">Respond.js</a> - A fast & lightweight polyfill for min/max-width CSS3 Media Queries (for IE 6-8, and more)
* <a href="http://lesscss.org/">LESS CSS</a> - The dynamic stylesheet language
* <a href="http://incident57.com/less/">LESS.app</a> - watches directories of .less files and compiles the code after every save.