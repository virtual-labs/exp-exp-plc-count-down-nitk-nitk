### Aim of the experiment: PLC Count-Down Instruction
<p style="text-align: justify;">
<b>Aim</b>: To understand the working of a count-down instruction in a programmable logic controller.
</p>

### Procedure :
<p style="text-align: justify;"><b>Procedure</b>: In our experiment, we wish to demonstrate the working of count-down instruction (Down-counter).<br>
 The fig below shows the set up.<br>
<center><img src="images/cdown/1.gif" height=450 width=500></center>
</p>
<ul type=disc style="text-align: justify;">
<li>Since inputs and outputs are less, 8-point Input and 8-point output module is sufficient. Where, CPU resides in slot 0, input module resides in slot 1, and output module in slot 2.</li>

<li> Here, two inputs are taken, one for counting and other for resetting the counter. Two push button of normally open type are used for this purpose. Also, 2 LED’s are used as output, to display the status of the counter. Counter down LED glows during counting (the moment count push button is pressed) and Done counting LED glows when the counter is done counting( i.e accumulator is greater than or equal to preset value). </li>

<li>Let us assign address for the input and output signals of the PLC.<br>
&#10147; Count ( normally open push button ) = I:1/0  <br>
&#10147; Reset (normally open push button ) = I:1/1   <br>
&#10147; Count down (LED) = O:2/0   <br>
&#10147; Done counting ( LED ) = O:2/2  <br>
&#10147; C5:1/CD = count-up enable bit  <br>
&#10147; C5:1/DN = done bit    
</li>

<li>Fig below shows the ladder diagram: <br>
<center><img src="images/cdown/2.gif" height=450 width=500></center>
</li>
<br>

<li>In order to see how the counter instruction in a PLC works, click count push button andobserve the counter instruction and counter down LED. When the counter is done counting, its status is displayed using Done counting LED. Once the counter is done
counting, it can be reset using reset push button.
<br>
</li>
</ul>

<p style="text-align: justify;">The following screen shots explains the operation :
<center><img src="images/cdown/3.gif" height=500 width=650></center><br>
The above screen shot represents the default condition or the condition after resetting the counter.<br>

<center><img src="images/cdown/4.gif" height=500 width=650></center>
The above screen shot represents the default condition or the condition after resetting the counter.<br>

<center><img src="images/cdown/5.gif" height=500 width=650></center><br>
The above screen shot represents the condition when the counter is done counting.</p>
