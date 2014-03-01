!SLIDE

<div class="center mountain">
  <h1 class="text-right half io squeeze left">what<br/>you<br/>see</h1>
  <a class="half block text-right" href="http://twitter.com/softprops">@softprops <span class="white">&#9997;</span></a>
</div>

!SLIDE
<div class="full">
  <span class="bg">
    <h1 class="oi">... what<br/>you<br/>get</h1>
  </span>
</div>

!SLIDE
<div>
  <h1 class="scrunch kinda-big">love your<br/>mom</h1>
  <div class="mid">
    <p class="mute text-right">always finish what's on your plate</p>
    <p class="mute text-right">clean behind your ears</p>
    <p class="mute text-right">always <span class="mute-less underline">be mindful of your neighbors</span></span></p>
  </div>
</div>

!SLIDE
<div>
 <h1>shareing the<br/>playground</h1>
</div>

!SLIDE

<div>
  <h1 class="full rather-big">
    runtime courtesy
  </h1>
</div>


!SLIDE

<div>
  <h1 class="kinda-big">don't</h1>
  <h2 class="mute">leave a trail of garbage</h2>
  <h2>make your dance partner uncomfortable</h2>
</div>

!SLIDE
<div>
  <h1 class="push-down">what translates well</h1>
  <p>(behaviorless) trait -> interface</p>
  <p>(vanilla, abstract, case*) class -> class</p>
</div>

!SLIDE
<div>
 <h1 class="push-down">what doesn't <br/>translate well</h1>
 <p>most everything<br/>you appreciate</p>
</div>

!SLIDE
<div>
 <div class="left half">
  <img width="100%" src="http://upload.wikimedia.org/wikipedia/commons/2/25/Mark_Twain%2C_Brady-Handy_photo_portrait%2C_Feb_7%2C_1871%2C_cropped.jpg" />
 </div>
 <div class="left mid gutter-left">
   <p>I have a translation<br/> for you.</p>
   <p class="leading-top">I went backwards.</p>
   <pre class="mid">javap <span class="mute">--help</span></pre>
 </div>
</div>

!SLIDE

default arguments...

<pre>
def apply(a: Int) =
  apply(a, 1, 2)
def apply(a: Int, b: Int) =
  apply(a, b, 2)
def apply(a: Int, b: Int, c: Int) =
  apply(a, b, c, ...)
</pre>

!SLIDE
<div>
<p>what you see</p>
<pre class="mid">
package defaultargs
class Apply(a: Int = 0, b: Int = 1, c: Int = 2) {
  def beep(boop: String = "BOOP") = boop * c
}
</pre>
</div>

!SLIDE
<div>
  <p>what you get</p>
  <pre class="javap" id="defaultargs"></pre>
</div>

!SLIDE
<div>
  <div class="half left">
     <img width="100%" src="http://static.designspiration.net/data/l/887432132963_7JO9aK3y_l.jpg"/>
  </div>
  <div class="mid half left center">
    <h2>companion$.</h1>
  </div>
</div>

!SLIDE
<div>
  <p>what you see</p>
  <pre class="mid">
package companions
object Bippy
class Bippy
  </pre>
</div>

!SLIDE

<div>
  <p>what you get</p>
  <pre class="javap" id="companions"></pre>
</div>

!SLIDE
<div>
  <div class="half center">
    <h1 class="rather-big">v@rs</h1>
  </div>
</div>

!SLIDE

<div>
  <p>what you see</p>
  <pre class="mid">
package vars
class Var(var value: Int)
  </pre>
</div>

!SLIDE

<div>
  <p>what you get</p>
  <pre id="vars" class="javap"></pre>
</div>

!SLIDE

# made amends?

!SLIDE

<div>
  <pre id="scratch" class="javap"></pre>
</div>

!SLIDE
<div class="center mountain">
  <h1 class="text-right half io squeeze left">what<br/>you<br/><span class="kinda-big">make</span>.</h1>
</div>

!SLIDE

### (•_•)
## ( •_•)>⌐■-■
# (⌐■_■)

( [@softprops](http://twitter.com/softprops) )
