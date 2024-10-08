---
title: Water Pressure and Pump Curve
type: measurement
layout: measurement_technique
measurement_technique_id: 12
excerpt: Use this technique to measure the pressure differential across pumps at one-hour intervals with data loggers. Data can be used to infer the water flow rate of pumps.
borrow_equipment_url: "https://nycenergytools.com/equipment/gauge-pressure-sensor/"
thumbnail_image: "/images/measurement-technique/water-pressure-and-pump-curve/2024_0410_water pressure and pump curve MT_thumbnail.jpeg"
related_systems:
  - Air Cooled Chiller
  - Water-cooled Chiller
  - Waterside Economizer
associated_components:
  - Liquid-to-liquid Heat Exchanger
url: "/documents/measurement-technique/water-pressure-and-pump-curve"
---

## Description of Water Pressure and Pump Curve

This technique uses water pressure measurements to infer the water flow rate (in GPM) for a pump. This is called the pump curve method because it uses the pump curve, pressure data and technical specifications of a pump to determine the water flow rate, as illustrated in Figure 1. A water loop system can have multiple pumps and the water flow rate for each pump must be determined and then summed to obtain the total flow rate of the water loop. Measurement data is used to calculate how much heat is added or removed by the heating or cooling plant; data is also used to calculate energy/heat recovered with a liquid-to-liquid heat recovery system. 

Water pressure measurements are taken at the inlet (suction) and outlet (discharge) sides of a pump. To measure water pressure, CUNY BPL recommends using a programmable data logger with pressure transducers installed on the access ports of the piping network.  This is preferred over a pressure gauge reading because the pressure gauge introduces greater measurement error. 

This technique should be used only if <strong>direct measurement of water flow rate</strong> with a flow meter is not possible. A few pieces of information are required to properly use this technique. The pump impeller size, model number and pump curve are required, as well as the information on the pump motor nameplate such as the horsepower and efficiency (for each pump in the water loop) in addition to the pressure measurements. Without all this information, this technique cannot be executed. Depending on how the piping network is designed in the facility a combination of a direct measurement of water flow rate and this measurement technique can be used. 

Measurements should be taken at one-hour intervals and not instantaneous values. For water loop systems that operate year-round and are driven by outside air temperature (OAT), one full year of measurement (12 consecutive months, 52 consecutive weeks, or 365 consecutive days) is required for the baseline and one full year for the reporting period. For water loop systems that operate during a particular season, the full season must be measured for the baseline and reporting periods. For water loop systems that are not driven by OAT, it is recommended to measure flow rate for a minimum of six weeks. Measurements should be taken when the system or component is operating under normal conditions. 
Figure 1 illustrates a typical pump curve with the flow rate (in GPM) marked on the horizontal axis and total head (in meters) marked on the vertical axis. Flow rate was determined by applying the pump impeller size and the total feet of head to the pump curve.  

### Type of Measurement 

<strong>Proxy</strong> 

<figure class="figure">
  <img src="/images/measurement-technique/water-pressure-and-pump-curve/water pressure and pump curve figure 1.png" class="figure-img img-fluid rounded" alt="Figure 1. A typical pump curve marked with the determined flow rate on the bottom axis.">
  <figcaption class="figure-caption text-left">Figure 1. A typical pump curve marked with the determined flow rate on the bottom axis.</figcaption>
</figure>

Total head is calculated by taking the difference between discharge and suction pressure and multiplying it by a constant. Design FT, design GPM, pump RPM and pump horsepower are all obtained from the nameplate on the pump or from the technical specifications for that pump model.

<p class="equation equation-center">\begin{equation*} \Delta P = Discharge \hspace{2mm} Pressure - Suction \hspace{2mm} Pressure\end{equation*}</p>
<p class="equation equation-center">\begin{equation*} Total \hspace{2mm} Head = \Delta P * 2.31 Pressure\end{equation*}</p>

<p class="step-indent">Where,</p>
<p class="equation">$\Delta P =$ differential pressure across the pump, psi</p>
<p class="equation">$Discharge \hspace{2mm} Pressure =$ water pressure leaving the pump, psi</p>
<p class="equation">$Suction \hspace{2mm} Pressure =$ water pressure entering the pump, psi</p>
<p class="equation">$Total \hspace{2mm} Head =$ operating pressure of the pump converted from psi, feet</p>
<p class="equation">$2.31 =$ constant equivalent to one poune of pressure per in $^2$ of water (at 60 degrees F), feet/psi</p>

### Equipment 

The measurement equipment needed for this procedure is a data logger with pressure transducers. The contents of this guide are largely based off of [Onset HOBO UX120-006M](https://nycenergytools.com/equipment/4-channel-analog-data-logger/) data logger and the [Ashcroft Pressure Transducer](https://nycenergytools.com/equipment/gauge-pressure-sensor/), which can be found and borrowed through the FELL. The Ashcroft Pressure Transducer measures voltage between 0V and 5V. The pressure transducer connects to the UX120-006M data logger which then converts the voltage signal to pressure in PSI units. Please refer to [our video instructions](https://youtu.be/9SxjYiv0sWw) for details on how to configure the UX120-006M to detect voltage and convert to pressure. 

CUNY BPL recommends using this equipment, rather than the on-site pressure gauge, to determine the pump flow to reduce measurement error. One pressure transducer should be used for each side of the pump. Heating and cooling plants can have different pump configurations such as primary-only and primary-secondary pumps. Additionally, pumps can operate at constant speed or variable speed. It is important to identify the pump configuration and number of pumps for the plant so enough data loggers and transducers are borrowed from the FELL.  

Please note that loggers will require setup with a computer or phone using the manufacturer’s proprietary software prior to installation and measurement logging and that older loggers will require the use of a cable to connect to a computer. Refer to the measurement equipment’s user manual for a detailed description of setup requirements.  

## Measurement Steps 

### 1. Preparation for Data Acquisition

Identify the temperature (hot or cold) of the pipes that will be measured. Use the manufacturer’s software to setup the logger. Refer to the user manual for detailed instructions on how to setup the logger. 

- Logging interval: 1-hour 
- Date and time to start logging 
- Date and time to stop logging
- Values to measure: voltage (V) or pressure (psi)[^1]
- Activate input channels on the logger
- Type of sensor
- Sampling interval: 1-second

<a href="https://www.youtube.com/watch?v=fUjz0qj7GVM&list=PL-NERcBsKg4WejBFb8CkJGuDocttfgSqa&index=1">
<figure class="figure">
  <img src="/images/measurement-technique/water-pressure-and-pump-curve/Water Pressure and Pump Curve Figure 2 Updated.png" class="figure-img img-fluid rounded" alt="Figure 2. How to configure the 4-channel analog logger.">
  <figcaption class="figure-caption text-left">Figure 2. How to configure the 4-channel analog logger.</figcaption>
</figure>
</a>

### 2. Installation at the Site 

- Confirm that the equipment is operational.
- Locate the pressure gauges that are installed on the suction and discharge sides of the pump, (Figure 3).
- Connect the transducers to the data logger.
- Place the data logger near the pipes, avoid placing the logger on the pipe itself.
- Confirm that the pressure gauge has a stop-valve to prevent water from flowing.
- If there is no stop valve on the piping system, then consider using the direct water flow measurement. 
- Remove the stop-valve and replace it with a T-shaped valve to stop the flow of water, as shown in Figure 3.
- Connect the transducer to the T-shaped valve.
- To avoid leaks, wrap Teflon tape around the installed equipment.

Figure 2 illustrates a pressure gauge installed on an access port to the return chilled water line of a water-cooled chilled water plant. Notice the stop valve handle to the bottom right of the pressure gauge. This is used to stop the flow of water. 

<a href="https://www.youtube.com/watch?v=FWgM0-VSlEQ&list=PL-NERcBsKg4WejBFb8CkJGuDocttfgSqa&index=2">
<figure class="figure">
  <img src="/images/measurement-technique/water-pressure-and-pump-curve/Water Pressure and Pump Curve Figure 3 Updated.png" class="figure-img img-fluid rounded" alt="Figure 3. A pressure gauge and stop-valve.">
  <figcaption class="figure-caption text-left">Figure 3. A pressure gauge and stop-valve.</figcaption>
</figure>
</a>

Figure 4 illustrates a pressure transducer connected to the T-shaped valve (on the right) and to the pressure gauge (on the top). The T-shaped valve was installed as an extension for the pressure transducer.  

<a href="https://www.youtube.com/watch?v=MCP9YBEGtrE&list=PL-NERcBsKg4WejBFb8CkJGuDocttfgSqa&index=3">
<figure class="figure">
  <img src="/images/measurement-technique/water-pressure-and-pump-curve/Water Pressure and Pump Curve Figure 4 Updated.png" class="figure-img img-fluid rounded" alt="Figure 4. Pressure transducer and T-shaped valve.">
  <figcaption class="figure-caption text-left">Figure 4. Pressure transducer and T-shaped valve.</figcaption>
</figure>
</a>

### 3. Verify Data is Being Collected 

Wait 24-48 hours to verify data collection. Return to the location of the measured equipment and use a laptop or a phone with manufacturer’s propriety software installed to do the following:  

<div class="alert alert-warning" role="alert">
<strong>Do not remove the logger or sensors.</strong> If you remove the logger, you may need to start over with the setup and installation process.
</div>

<ul>
<li>If necessary, connect the logger to the laptop or phone via USB cable. Otherwise, use the software to connect with the data logger via Bluetooth.</li>
<li>Analyze the data with a plot graph. This can be done with proprietary software or Microsoft Excel after exporting the dataset as a .csv file.</li>  
<li>Determine if the results align with the expected operation of the system or component based on observed operational patterns or known equipment schedules.</li>  
</ul>

<a href="https://www.youtube.com/watch?v=KyLO5ARQbuA&list=PL-NERcBsKg4WejBFb8CkJGuDocttfgSqa&index=4">
<figure class="figure">
  <img src="/images/measurement-technique/water-pressure-and-pump-curve/Water Pressure and Pump Curve Figure 5 Updated.png" class="figure-img img-fluid rounded" alt="Figure 5. Plot graph of pressure data collected from the supply and return lines of chilled water. Software in use is HOBOware Free. This logger had two pressure transducers connected to it and resulted in two separate measurements as shown on the plot graph.">
  <figcaption class="figure-caption text-left">Figure 5. Plot graph of pressure data collected from the supply and return lines of chilled water. Software in use is HOBOware Free. This logger had two pressure transducers connected to it and resulted in two separate measurements as shown on the plot graph.</figcaption>
</figure>
</a>

### 4. Retrieve Measurement Equipment and Download All Final Data

After verifying the logger is collecting data, do the following: 

<ul>
<li>Allow the logger to collect data for the remainder of the measurement period.</li> 
<li>After the measurement period has concluded, remove the transducers and data logger.</li> 
<li>If necessary, connect the logger to the laptop or phone via USB cable. Otherwise, use the software to Stop the logger and end data collection.</li>     
<li>Download all data from the logger and save the file in the .csv file format for analysis.</li> 
</ul>

<a href="https://www.youtube.com/watch?v=47hqmeOh5X4&list=PL-NERcBsKg4WejBFb8CkJGuDocttfgSqa&index=5">
<figure class="figure">
  <img src="/images/measurement-technique/water-pressure-and-pump-curve/Water Pressure and Pump Curve Figure 6 Updated.png" class="figure-img img-fluid rounded" alt="Figure 6: Final data table in .csv format. Data was extracted from the logger using the HOBOware free software and exported for analysis. This dataset contains two columns of average hourly pressure data, one for each pressure transducer that was used.">
  <figcaption class="figure-caption text-left">Figure 6: Final data table in .csv format. Data was extracted from the logger using the HOBOware free software and exported for analysis. This dataset contains two columns of average hourly pressure data, one for each pressure transducer that was used.</figcaption>
</figure>
</a>

## Troubleshooting 

<strong>Problem:</strong> the logger is measuring unexpected values 

<div class="alert alert-warning" role="alert">
<strong>Solution:</strong> Verify that the logger is calibrated and re-calibrate the equipment if necessary. 
</div>

## Footnotes

[^1]: This is dependent on the measurement capability of the chosen logger.
