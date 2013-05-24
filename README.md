Charting and Visualization for Journalism
=========================================

You have a story you want to tell with data, and you want to show it in a visually impactful way. (That's why you're here, right?) Charts and visualizations can be helpful to you as a reporter, in calling your attention to the nugget of info that really matters. They also can be helpful to your reader as a supplement to a text story, or tell a self-standing narrative all on their own. In this course, students will learn to discern when it's appropriate to use a visualization, to distinguish among the types of visualizations that exist and when they are good choices, to create charts that work on multiple browsers and have interactivity for users to explore, to add annotations to these charts that guide users through the story.

# Pre-requisites:

* Understand enough HTML and CSS to get what styling a div means.
* Enough jQuery that $('#myDiv').hover(function(e){alert('success!')}) makes sense.
* Enough responsive to "get" the concepts of media queries.
* Understanding of what a JavaScript object is.

## I. Why do visualizations?

* Theory on why visuals help us see things
* Types of objects that are easier for humans to parse (we're better at lines than circles)

## II. Types of visualizations - go over pros and cons

* Bar chart
* Fever chart
* spread circles
* flow diagrams
* small multiples
* Pies
* possibly others
* What we won't cover (maps, tables, videos, etc., but worth short discussion)

## III. Data standardization/conversion

* introduce/remind what a CSV/TSV is, what is JSON
* how to get from one to the other
* show Mr. Data Converter as a method from getting from one to another
* show JSONlint to validate your JSON

## IV. Overview of charting libraries out there

* explain importance of canvas we draw on -- SVG/VML/canvas
* Raphael - what we'll spend most time
        i. address gRaphael, I caution against it
* D3 intro - we'll get back to this
* Flot/Highcharts/other light JS options

## V. Raphael - learn how to make shapes, add various actions (make multiboxes visualization, showing categories of data)

* create a canvas to draw on
* practice drawing shapes, change size/coords
* practice adding attributes to shape (color, font-size for text, etc.)
* add events to various shapes (things happen when click/hover)
* Use events to trigger popup simple text
* This will result in an overview viz of data, when viewed in tandem with the graph we are about to create, which will provide more detail, the two-part viz is a complete package lending insight about data

## VI. Amcharts - make basic charts in already-existing story forms - figure out ways to show data as line and/or bar chart

* attach inputted data to graph
* use JS to modify attributes of graph
* Modify what shows up on rollover
* We create basics of a second more in-depth viz than previous

## VII. Use Raphael skills to extend Amcharts

* Discuss importance of annotations, why you should implement in chart
* Show how Raphael is related to amchart - inspect chart object to show what it contains, and how it matches Raph
* Find x axis that contains year
* add object that has "annotation" text for certain years
* Attach click handlers to modify
* Trigger key in annot text object to show relevant text

## VIII. Addressing small view concerns

* Sometimes, your viz may not display well on small views, and we may want to swap in a table
* how to access bits of data as a JSON object
* creating a table row template with Underscore
* Using that template to create a full-blown auto-generated table
* Showing/hiding table viz based on media queries -- should be a concept review

## IV. D3 - Add physics-based animations to your graphs, understand diff between this and other tools

* Note: This is not to show you how to use it, just to explain why it might be worth digging into, and show off what goes into it.
* lots of talk about D3 -why is it different (great for motion, lack of IE compatibility)

## X. Learn how to learn to move forward from here

* how to look things up in documentation
* power of stackoverflow
* review reverse engineering API (inspect the chart object to figure out what it contains/what docs don't tell you)
* touch on perils of this strategy
* show how to manipulate data once it's already in JS - can use the console like an irb shell
