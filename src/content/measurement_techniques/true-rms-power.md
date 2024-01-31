---
title: True RMS Power
type: measurement
layout: measurement_technique
measurement_technique_id: 2
excerpt: This technique uses a handheld power meter to take one-time measurements of true RMS power draw (kW) at an electrical distribution system such as a panelboard, power panel or switchgear.
related_systems:
  - Constant-speed, Constant-volume Air Handling Unit
  - Dual-speed Air Handling Unit
  - Chilled Water Loop
  - Electrical Distribution
  - Steam Condensate Recovery
  - Steam Distribution
  - Hot Water Loop
  - Water Cooled Chiller
  - Condenser Water Loop
related_components:
  - Constant-speed, Constant-volume Fan and Motor
  - Constant-speed, Constant-volume Pump and Motor
  - Constant-speed, Constant-volume Compressor and Motor
url: "/documents/measurement-technique/true-rms-power"
---

## Description of True RMS Power

This technique uses a handheld power meter to take one-time measurements of true RMS power draw (kW) at an electrical distribution system such as a panelboard, power panel or switchgear. One-time measurements work as snapshots of power draw, voltage, current and power factor for a system or component such as lighting fixtures, chillers and fan and pump motors. This measurement technique is commonly used with loads that have constant power draw such as constant speed fans and pumps, as well as some lighting fixture systems. If power draw changes over time CUNY BPL recommends using a data logger to take direct measurements of electrical energy consumption (link to electrical energy measurement technique) (kWh).  

Power meters use instantaneous measurements of current and voltage to calculate the instantaneous power draw. As the meter remains connected to the distribution system, it calculates the average power draw and this is displayed on the meter’s screen. Manufacturers of power meters and data loggers use different calculation methodologies to calculate the power draw. In order to compare power draw data obtained from different loggers and meters it is important to understand the calculation methodology used by the equipment by referring to the user manual. 
It is advised to take a minimum of three measurements 1-2 minutes apart while the system or component is in operation. The average of the three measurements (for true RMS power, voltage, current and power factor) should be calculated, as averaging the values helps to reduce the measurement uncertainty.  

Electrical distribution systems can have different configurations such as three-phase delta, three-phase wye, single-phase and split phase on a delta configuration. It is important to first identify the configuration of the system before taking any measurements. The configuration of the system will determine the connections to make with the measurement equipment. Refer to the Measurement Steps section for more details on the different configurations. 

### Type of Measurement

Proxy 

This is a proxy measurement of electrical energy consumption of a system or component. Energy consumption is calculated with true RMS power draw and the runtime (operating schedule) of the system or component. 

### Equipment

The measurement equipment needed for this procedure is a handheld power meter with a current transformer and voltage cables. Refer to the [FELL catalog](https://nycenergytools.com/equipment/?_measurement_type=energy&_equipment_type=logger) to identify data loggers that measure power and energy draw by an electricity-powered system. The contents of this guide are largely based off the [Fluke 345 PQ Clamp Meter](https://nycenergytools.com/equipment/power-quality-clamp-meter/) and the [Extech PQ2071](https://nycenergytools.com/equipment/power-quality-clamp-meter-2/), both of which can be found and borrowed through FELL. A power meter will typically measure AC voltage, current and power factor and can display all values simultaneously. Please note that some power meters can log data for a short amount of time or take a screen shot of the measurements while the meter is connected to the load. Taking a picture with a phone is another option for saving measurement data. 

While some power meters can measure true three-phase power by measuring each phase, other meters with fewer wire connections can only estimate three-phase power. The Fluke 345 PQ Clamp Meter is an example of a meter that only estimates three-phase power. The Extech PQ20711 is an example of a meter that can measure three phases without estimation. Both meters should only be used on a balanced load, meaning the currents and voltages on each phase are equal. If the load is not balanced, three-phase power cannot be accurately measured with a handheld meter and a data logger with the capacity to measure three phases at the same time (such as the Dent EliteProXC2) should be used instead.

## Measurement Steps

### 1. Preparation for Data Acquisition

The following sections will discuss the most common wire configurations found in a distribution system and assume a handheld power meter is being used, for details on how to install data loggers refer to the <strong>True RMS Energy guide.</strong>  

Values to measure:  
<ul>
    <li>True RMS power (kW)</li>
    <li>Voltage (V)</li> 
    <li>Current (Amps)</li> 
    <li>Power Factor</li>
</ul>

### 2. Installation of Equipment

<ul>
    <li>Confirm that the equipment is operational.</li>  
    <li>Identify if the distribution system supplies electricity to other loads that are not relevant to the project (to avoid measuring unwanted loads).</li>
    <li>Identify the wiring configuration of the distribution system. This will determine how to set up the logger and sensors.</li>
    <li>Based on the wiring configuration and instructions from the equipment’s user manual, install the sensor and logger to measure the current, voltage and power factor to the system.</li>
</ul>

An example of how to connect the Fluke 345 PQ Clamp Meter is shown below

<iframe width="560" height="315" src="https://www.youtube.com/embed/FaWG8QRf7pE?si=mAjHxyWZ5hJOPmNK" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> 

Some power meters offered through FELL can measure three-phase power with different calculation methods. Carefully read the user manual of the power meter to identify the calculations used to estimate three-phase power.

#### Single-phase Wire Configurations

A single-phase electrical distribution system typically consists of a hot wire and a neutral wire. The hot wire provides current to the load while the neutral wire returns the current to the supply in order to complete the circuit. To measure power draw of a single-phase system, the voltage across the hot wire and neutral wire is measured and the current of the hot wire is measured. Figures 1 and 2 are examples of how measurement equipment offered by the FELL are connected on a single-phase system.

<figure class="figure mb-3 mt-3">
  <img src="/images/measurement-technique/true-rms-power/rms-figure2.png" class="figure-img img-fluid rounded" alt="Figure 2. Single-phase power measurement connections for the Fluke 345 Power Quality Clamp Meter. Image courtesy of Fluke Corporation.">
  <figcaption class="figure-caption text-left">Figure 2. Single-phase power measurement connections for the Fluke 345 Power Quality Clamp Meter. Image courtesy of Fluke Corporation.</figcaption>
</figure>

<figure class="figure mb-3 mt-3">
  <img src="/images/measurement-technique/true-rms-power/rms-figure3.png" class="figure-img img-fluid rounded" alt="Figure 3. Single-phase, three wire or split-phase connections for the Extech Instruments Clamp meter, model PQ2071. Image courtesy of Extech Instruments.">
  <figcaption class="figure-caption text-left">Figure 3. Single-phase, three wire or split-phase connections for the Extech Instruments Clamp meter, model PQ2071. Image courtesy of Extech Instruments.</figcaption>
</figure>

#### Three-phase Wire Configurations

For a three-phase distribution system there are two common wire configurations: the three wire (delta) and four wire (wye). Both wire configurations require slightly different connections of the voltage leads. Manufacturers of power meters have specific instructions on how to make connections for a given wire configuration. Refer to the power meter’s user manual for detailed instructions. Figures 3, 4, and 5 are examples of how some of the meters offered by the FELL are connected to three-phase systems. 

<figure class="figure mb-3 mt-3">
  <img src="/images/measurement-technique/true-rms-power/rms-figure4.png" class="figure-img img-fluid rounded" alt="Figure 4. Three-phase power measurement using the Fluke 345 Power Quality Clamp Meter. Image courtesy of Fluke Corporation. ">
  <figcaption class="figure-caption text-left">Figure 4. Three-phase power measurement using the Fluke 345 Power Quality Clamp Meter. Image courtesy of Fluke Corporation.</figcaption>
</figure>

For the connection illustrated in Figure 3, this power meter can only measure line-to-line voltage of two phases and the current of the third phase to estimate True RMS power.

<figure class="figure mb-3 mt-3">
  <img src="/images/measurement-technique/true-rms-power/rms-figure5.png" class="figure-img img-fluid rounded" alt="Figure 5. Three-phase, three wire (delta) power measurement connections using the Extech Instruments Clamp meter, model PQ2071.">
  <figcaption class="figure-caption text-left">Figure 5. Three-phase, three wire (delta) power measurement connections using the Extech Instruments Clamp meter, model PQ2071.</figcaption>
</figure>

<figure class="figure mb-3 mt-3">
  <img src="/images/measurement-technique/true-rms-power/rms-figure6.png" class="figure-img img-fluid rounded" alt="Figure 6: Three-phase, four wire (wye) power measurement connections using the Extech Instruments Clamp meter, model PQ2071.">
  <figcaption class="figure-caption text-left">Figure 6: Three-phase, four wire (wye) power measurement connections using the Extech Instruments Clamp meter, model PQ2071.</figcaption>
</figure>

## Troubleshooting

<p><strong>Problem 1:</strong> It can be difficult or confusing to know how to connect a power meter to a panelboard because panelboards can have many different colored wires. Older panelboards might not have clear or accurate labeling at the circuit breakers, making it challenging to make proper connections.</p> 
<p><strong>- Solution:</strong> In cases where it is unclear how the power is distributed, do not touch the panel or install any sensors without first having someone from the facility identify the power distribution.</p>  


<p><strong>Problem 2:</strong> The panelboard is too small, and connections cannot be made within the space constraints.</p>  
<p><strong>- Solution:</strong> Connect the sensors at the panelboard’s input or measure at the switchgear.</p>  


<p><strong>Problem 3:</strong> A voltage connection cannot be made because the alligator clips are too large or contact cannot be made with the metal lugs in the panelboard.</p>
<p><strong>- Solution:</strong> Voltage connection can be difficult if you are not using the correct attachments. Voltage cables can have alligator clips or leads to accommodate for space constraints. In a case where connection cannot be made, use different size voltage leads or investigate alternative attachments for the panelboard’s configuration.</p>  
 

<p><strong>Problem 4:</strong> Unexpected Negative Values</p>  
<p><strong>- Solution:</strong> At times, measurements will return as negative values because of how the voltage cables are connected. Connect voltage cables in different ways until you obtain positive values. Make sure the connections are correct for accurate power measurements. If you are not sure about the connections consult a certified electrician.<p>