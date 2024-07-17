---
title: Electrical Current
type: measurement
layout: measurement_technique
measurement_technique_id: 3
excerpt: This technique uses a data logger and current transformers to take measurements of electrical current (Amps) at the electrical distribution system such as a panelboard at one-hour intervals.
borrow_equipment_url: "https://nycenergytools.com/equipment/4-channel-analog-data-logger/"
thumbnail_image: "/images/measurement-technique/electrical_current/2024_0410_electrical current MT_thumbnail.jpeg"
associated_systems:
  - Boiler
  - Electrical Distribution
related_components:
  - Constant-speed, Constant-volume Fan and Motor
related_calculations:
  - Cooling Tower Fans Energy Consumption
associated_calculations:
  - Cooling Tower Fans Energy Consumption
url: "/documents/measurement-technique/electrical-current"
---

## Description of Electrical Current

This technique uses a data logger and current transformers to take long-term measurements of electrical current (Amps) at one-hour intervals. This data provides insight on the operating schedule of the system or component and can be used to calculate energy consumption of the target equipment at the power panel or electrical panelboard. A system or component that is running (i.e., consuming energy) will have high current draw. A system or component that is not running (i.e., has no energy consumption) will have low or no current draw.  

Data loggers and current sensors use instantaneous measurements of current over the course of an hour to calculate the average amperage. As such, current data should be recorded as hourly average values1, not instantaneous. When taking one-hour measurements, the logger will detect current over the course of every hour and store that value. Sometimes current can fluctuate over a one-hour period (motors turn off or change speed) but the instantaneous current value will not indicate that change.  

The duration of the long-term measurement and when to measure is dependent on the system and the operation of the building. The best practice is a minimum of six weeks and data should be collected at one-hour intervals; longer measurement periods are encouraged for deeper analysis of the equipment. Measurements should be taken when the system or component is operating under normal conditions.

### Type of Measurement

Direct and Proxy

This methodology is a direct measurement of current, however it is also considered a proxy measurement of power and energy, as well as operational hours of the system or component.

### Equipment

The measurement equipment needed for this procedure is an energy data logger that has the capacity to measure AC current over time and record measurement data in its internal storage. Refer to the [FELL catalog](https://nycenergytools.com/equipment/?_measurement_type=energy&_equipment_type=logger) to identify data loggers that measure current draw by an electricity-powered system. The contents of this guide are largely based off of the [Onset HOBO 4-channel analog logger (UX120-006M)](https://nycenergytools.com/equipment/4-channel-analog-data-logger/) and the [Onset Split-Core AC Current Transformer (CTV-x)](https://nycenergytools.com/equipment/?_search_equipment=split%20core), which can be found and borrowed through FELL. 

Current transformers are sensors that detect the magnetic field induced by an electrical current through a wire. As the current increases or decreases the magnetic field strength will change and the current transformers will detect this change. The data logger will calculate current through the wire based on the signal from the transformers and record the AC current value in its internal storage. A data logger can have multiple current transformers connected to it allowing a user to measure multiple wires with a single logger. It is important to know how many wires will be measured and the current rating of those wires, so the appropriate current transformers are used.  

Please note that loggers will require setup with a computer or phone using the manufacturer’s proprietary software prior to installation and measurement logging and that older loggers will require the use of a cable to connect to a computer. Refer to the measurement equipment’s user manual for a detailed description of setup requirements.  

## Measurement Steps

### 1. Preparation for Data Acquisition

Use the manufacturer’s software to set up and launch the logger(s). Refer to the equipment’s user manual for detailed instructions on how to set up the logger. Before the following steps are taken, the current rating(s) for wires to be measured should be identified in advance so as to choose the properly sized current transformer for this measurement approach. See the equipment’s instruction manual for further instructions about how to properly size the current transformers for the target system or component.  

<ul>
  <li>Logging interval: 1-hour</li>
  <li>Date and time to start logging</li>
  <li>Date and time to stop logging</li>
  <li>Sampling interval: 1-second</li>
  <li>Value to measure: AC current (Amps)</li>
  <li>Activate input channels of the logger</li>
  <li>Select the current rating of transformers being used</li>
</ul>

An example of how to setup the Onset HOBO 4-channel analog logger (UX120-006M) is shown in the video below 

<iframe class ="video" src="https://www.youtube.com/embed/fUjz0qj7GVM?si=tSIiXYE0bUuRB5LX" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

<a href="https://www.youtube.com/embed/fUjz0qj7GVM?si=tSIiXYE0bUuRB5LX">
<figure class="figure">
  <img src="/images/measurement-technique/electrical_current/Electrical Current Figure 1 Updated.png" class="figure-img img-fluid rounded" alt="Figure 1. Setting up Onset HOBO 4-Channel analog logger (UX120-006M).">
  <figcaption class="figure-caption text-left">Figure 1. Setting up Onset HOBO 4-Channel analog logger (UX120-006M).</figcaption>
</figure>
</a>

### 2. Installation of Equipment

<ul>
  <li>Confirm that the equipment is operational.</li>
  <li>Connect the sensors to the data logger.</li> 
  <li>Identify if the distribution system supplied electricity to other loads that are not relevant to the project (to avoid measuring unwanted loads).</li>
  <li>Identify the wiring configuration of the distribution system. This will determine how to set up the logger and sensors.</li> 
  <li>Based on the wiring configuration and instructions from the equipment’s user manual, install the sensor and logger to measure the current draw by the system. The current transformers are clamps that open and surround the wire, see Figure 2.</li>
  <li>Clamp the sensors around the electrical wires. Make sure they are facing the right direction, or else the current may be recorded with negative values.</li>
  <li>Adhere the data logger to the panelboard. Some loggers have magnets that allow for placement on the panelboard itself, while others do not.</li>
</ul>

<a href="https://youtu.be/FWgM0-VSlEQ?si=rFLFwPDXpXN7iOLy">
<figure class="figure">
  <img src="/images/measurement-technique/electrical_current/Electrical Current Figure 2 Updated.png" class="figure-img img-fluid rounded" alt="Figure 2. Onset HOBO 4-Channel analog logger (UX120-006M) connected on a panelboard.">
  <figcaption class="figure-caption text-left">Figure 2. Onset HOBO 4-Channel analog logger (UX120-006M) connected on a panelboard.</figcaption>
</figure>
</a>

<figure class="figure">
  <img src="/images/measurement-technique/electrical_current/electrical_current_figure3.png" class="figure-img img-fluid rounded" alt="Figure 3. Example of how the current transducer sensors typically clamp around electrical wires.">
  <figcaption class="figure-caption text-left">Figure 3. Example of how the current transducer sensors typically clamp around electrical wires.</figcaption>
</figure>

<figure class="figure">
  <img src="/images/measurement-technique/electrical_current/electrical_current_figure4.png" class="figure-img img-fluid rounded" alt="Figure 4. Onset Split-core AC Current Transformer (CTV-x) connected to the incoming feed lines of a three-phase electrical panelboard.">
  <figcaption class="figure-caption text-left">Figure 4. Onset Split-core AC Current Transformer (CTV-x) connected to the incoming feed lines of a three-phase electrical panelboard.</figcaption>
</figure>

<figure class="figure">
  <img src="/images/measurement-technique/electrical_current/electrical_current_figure5.png" class="figure-img img-fluid rounded" alt="Figure 5. Example of a current sensor attached to a single wire. The wire is connected to a circuit breaker within a panelboard. ">
  <figcaption class="figure-caption text-left">Figure 5. Example of a current sensor attached to a single wire. The wire is connected to a circuit breaker within a panelboard.</figcaption>
</figure>

### 3. Verify Data is Being Collected

Wait 24-48 hours to verify data collection. Return to the location of the measured equipment and use a laptop or a phone with the manufacturer’s proprietary software installed to do the following:

<ul>
  <li><strong>Do not remove the logger or sensors.</strong></li>
  <li>If necessary, connect the logger to the laptop or phone via USB cable. Otherwise, use the software to connect with the data logger via Bluetooth.</li>
  <li>Analyze the data with a plot graph. This can be done with the proprietary software or Microsoft Excel after exporting the dataset as a .csv file.<li>
  <li>Determine if the results align with the expected operation of the system or component based on observed operational patterns or known equipment schedules.</li>
</ul>

<a href="https://youtu.be/KyLO5ARQbuA?si=r91vAKoqICA1lKNQ">
<figure class="figure">
  <img src="/images/measurement-technique/electrical_current/Electrical Current Figure 6 Updated.png" class="figure-img img-fluid rounded" alt="Figure 6. Plot graph of measured current for a power panel that serves a lighting system. Software in use is HOBOware Free.">
  <figcaption class="figure-caption text-left">Figure 6. Plot graph of measured current for a power panel that serves a lighting system. Software in use is HOBOware Free.</figcaption>
</figure>
</a>

### 4. Retrieve Measurement Equipment and Download Data

After verifying that the logger is collecting data, do the following: 

<ul>
  <li>Allow the logger to collect data for the remainder of the measurement period.</li>
  <li>After the measurement period has concluded, remove the logger from the panel.</li>
  <li>If necessary, connect the logger to the laptop or phone via USB cable. Otherwise, use the software to connect with the data logger via Bluetooth.</li>
  <li>Use the proprietary software to Stop the logger and end data collection.</li>   
  <li>Download all data from the logger and save the file in the .csv file format for analysis.</li>
</ul>

<a href="https://youtu.be/47hqmeOh5X4?si=RSfef24Fo98Co7hS">
<figure class="figure">
  <img src="/images/measurement-technique/electrical_current/Electrical Current Figure 7 Updated.png" class="figure-img img-fluid rounded" alt="Figure 7. Final data table in .csv format. Data was extracted from the logger using HOBOware free and exported for analysis.">
  <figcaption class="figure-caption text-left">Figure 7. Final data table in .csv format. Data was extracted from the logger using HOBOware free and exported for analysis.</figcaption>
</figure>
</a>

## Troubleshooting

<strong>Problem 1:</strong> Unexpected Negative Readings

<div class="alert alert-warning" role="alert">
<strong>Solution:</strong> Confirm that all current transformers (CTs) are facing the correct direction.
</div>

<strong>Problem 2:</strong> Unexpected Low Values

<div class="alert alert-warning" role="alert">
<strong>Solution:</strong> Confirm that the current rating for the electrical distribution system is within the range of the current rating for the CTs.
</div>

<strong>Problem 3:</strong> CTs Do Not Fit in Panelboard Casing

<div class="alert alert-warning" role="alert">
<strong>Solution:</strong> If it is safe to do so, trace the wires outside the panelboard and install the sensors there. If this is unsafe or not possible to do, consider seeking the help of a certified electrician.
</div>
