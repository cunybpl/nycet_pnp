---
title: Static Pressure Reset in an AHU
type: soo
layout: guide
excerpt: The main goal is to minimize the supply fan speed to provide just enough pressure to the boxes such that the damper for the terminal unit with the highest heating or cooling demand is 100% open.
soo_id: 8
thumbnail_image: "/images/hero/measurement-guide-thumb-placeholder.jpg"
associated_components:
  - Constant-speed, Constant-volume Fan and Motor
related_components:
  - Constant-speed, Constant-volume Fan and Motor
url: "/documents/soos/static-pressure-reset-ahu"
---

## General Overview

Static pressure reset in an air handling unit (AHU) slows down the fan in a multi-zone AHUs that supplies air to variable air volume (VAV) terminal units. The main goal is to minimize the supply fan speed to provide just enough pressure to the boxes such that the damper for the terminal unit with the highest heating or cooling demand is 100% open.  

The goal of static pressure reset is to use less electrical energy to meet cooling and heating loads, by lowering the AHU fan speed. When loads are moderate, and if the AHU is operated with constant static pressure, the VAV boxes will close their dampers to reduce air flow to the zones. Although zone air flows and temperatures are properly maintained, the AHU supply fan is working harder than necessary. If the fan speed is modulated, then the VAV box dampers can be opened to maintain the flow to meet the load. The zone with the greatest demand will be opened nearly 100%.  

ASHRAE Standard 90.1-2019 and the NYC Energy Conservation Code (Section C403.6.8) requires static pressure reset for all multi-zone AHUs: 

<i>For systems with direct digital control of individual zones reporting to the central control panel, the static pressure setpoint shall be reset based on the zone requiring the most pressure. In such case, the setpoint is reset lower until one zone damper is nearly wide open. The direct digital controls shall be capable of monitoring zone damper positions or shall have an alternative method of indicating the need for static pressure that is configured to provide all of the following:</i> 

1. Automatic detection of any zone that excessively drives the reset logic. 
2. Generation of an alarm to the system operational location. 
3. Allowance for an operator to readily remove one or more zones from the reset algorithm. 

The code applies to all mechanical systems that serve multiple zones, which are required to be VAV. 

### Basic Control Logic

SOOs are essentially feedback loops that employ a combination of sensors, controllers, and actuators to impact a process and maintain a desired state. For example, a thermostat provides a signal to a controller, and the controller sends a signal to the furnace. When the temperature falls below a certain setpoint, the controller sends a signal to the furnace to fire up and to turn on the air handler to provide heated air to the conditioned space. Once the temperature reaches the desired setpoint, the controller sends a signal to reduce the fan speed and/or to turn off the furnace. 

Figure 1 presents a schematic of the general principle of the static pressure reset control feedback loop. For a multi-zone AHU, the static pressure of the supply air is maintained at a level such that at least one VAV box damper position is set at 100%. The pressure reset value is determined by the number of requests that are received by the building automation system (BAS). ASHRAE Guideline 36 (“High-Performance Sequences of Operation for HVAC Systems”) includes a detailed algorithm based on VAV flow and damper position that can be used to determine the number of requests sent from each VAV to the BAS. 

<a href="">
    <figure class="figure mb-0 mt-3">
        <img src="" class="figure-img img-fluid rounded" alt="Figure 1. Fundamental static pressure reset control logic.">
        <figcaption class="figure-caption text-left">Figure 1. Fundamental static pressure reset control logic.</figcaption>
    </figure>
</a>

## Algorithm for the Sequence of Operation

The reset algorithm is known as Trim and Response (T&R), where Trim indicates a decrement and Response indicates an increment. The BAS will receive VAV “requests” and adjust the pressure setpoint. This section will first define a VAV request, and then present details of the T&R algorithm.  

Figure 2 presents a diagram of the algorithm used to calculate requests for an individual VAV box. During a single data sample, there can be multiple requests per box, which reflects the relative urgency to reset the static pressure. 

<a href="">
    <figure class="figure mb-0 mt-3">
        <img src="" class="figure-img img-fluid rounded" alt="Figure 2. Algorithm to calculate static pressure reset requests (Placeholder graphic, ASHRAE 36-2018, Section 5.6.8.2).">
        <figcaption class="figure-caption text-left">Figure 2. Algorithm to calculate static pressure reset requests (Placeholder graphic, ASHRAE 36-2018, Section 5.6.8.2).</figcaption>
    </figure>
</a>

The BAS calculates a weighted sum of the total number of requests from all VAV boxes that are served by the AHU. Individual boxes may be weighted more depending on the size, the use, or the location of the zone. During commissioning, a box may be weighted less if it is found to be repeatedly calling for resets. 

Figure 3 presents a diagram of the T&R algorithm, with the variables defined in Table 1.

<div class="table-wrapper">
<table>
    <caption>Table 2. Energy-consuming components associated with the static pressure reset SOO.</caption>
    <thead>
        <tr>
            <th>
                Variable
            </th>
            <th>
                Definition
            </th>
        </tr>
    <tbody>
        <tr>
            <td>
                SP0
            </td>
            <td>
                Initial setpoint
            </td>
        </tr>
        <tr>
            <td>
                SP1
            </td>
            <td>
                Reset setpoint
            </td>
        </tr>
        <tr>
            <td>
                SPmin
            </td>
            <td>
                Minimum setpoint
            </td>
        </tr>
        <tr>
            <td>
                SPmax
            </td>
            <td>
                Maximum setpoint
            </td>
        </tr>
        <tr>
            <td>
                I
            </td>
            <td>
                Number of ignored requests
            </td>
        </tr>
        <tr>
            <td>
                R
            </td>
            <td>
                Number of requests from zones
            </td>
        </tr>
        <tr>
            <td>
                SPtrim
            </td>
            <td>
                Trim amount
            </td>
        </tr>
        <tr>
            <td>
                SPres
            </td>
            <td>
                Respond amount
            </td>
        </tr>
    </tbody>
</table> 
</div>

The condition R>I (left side of the diagram) ensure that the pressure reset only happens when the number of requests is great enough. Note the difference in the Respond and Trim equations. For Respond, the incremental increase, SPres, is multiplied by (R-I), which allows the system to raise the static pressure quickly. Conversely, for Trim, only a gradual decrement by SPtrim is possible per time step. Note also that the setpoint is bound within the range SPmin and SPmax. Typically, the time step is set to two minutes. 

<a href="">
    <figure class="figure mb-0 mt-3">
        <img src="" class="figure-img img-fluid rounded" alt="Figure 3. Trim and Response logic for static pressure reset.">
        <figcaption class="figure-caption text-left">Figure 3. Trim and Response logic for static pressure reset.</figcaption>
    </figure>
</a>

Finally, the upper right quadrant of  Figure 3 shows the control loop for adjusting fan speed and VAV damper position, which is sampled more frequently than for the pressure setpoint reset.  

ASHRAE 36-2018 describes the general logic, though different controls manufacturers may apply additional logic. For example, Johnson Controls (2018) implements different rules in their control logic between cooling and heating seasons. In summer, supply air temperature is fixed and static pressure is reset; in winter, static pressure is fixed and supply air temperature varies. This control scheme also turns on Trim and Response only if zones are occupied. 

## Evaluation of Energy Consumption 

The avoided energy from implementing static pressure reset comes mostly from reducing the electrical power to run the AHU fans. Static pressure reset generally has minimal impact on heating and cooling energy; while pressure is decreased by reducing airflow, the amount of heating and cooling energy delivered to the space should be approximately the same. Heating and cooling reductions may occur when dramatic differences in pre- and post-retrofit space temperatures can be demonstrated. In some cases, there is overheating or underheating in some zones, which this SOO may resolve. If this SOO is being implemented as part of a complete AHU replacement, heating and cooling energy reductions may also be seen.  

Table 2 provides a summary of the components to be measured to arrive at the values needed to quantify the annual energy consumption and operating characteristics of an AHU with a pressure reset SOO.  

<div class="table-wrapper">
<table>
    <caption>Table 2. Energy-consuming components associated with the static pressure reset SOO.</caption>
    <thead>
        <tr>
            <th>
                System Quantification
            </th>
            <th>
                Values to be Quantified
            </th>
            <th>
                Energy Consuming Component
            </th>
        </tr>
    <tbody>
        <tr>
            <td>
                AHU
            </td>
            <td>
                Hourly average fan motor (kWh)
            </td>
            <td>
                Fan and Motor
            </td>
        </tr>
        <tr>
            <td>
                AHU
            </td>
            <td>
                <ul>
                  <li>Average hourly air flow (cfm)</li>
                  <li>Temperature difference between Mixed Air and Discharge Air</li>
                </ul>
            </td>
            <td>
                Cooling Coil
            </td>
        </tr>
    </tbody>
</table> 
</div>

### Components to Measure and Measurement Locations 

The measurement locations for a static pressure reset SOO are shown in Figure 4.

<a href="">
    <figure class="figure mb-0 mt-3">
        <img src="" class="figure-img img-fluid rounded" alt="Figure 4. Static pressure reset SOO measurement points.">
        <figcaption class="figure-caption text-left">Figure 4. Static pressure reset SOO measurement points.</figcaption>
    </figure>
</a>

## Interaction of Static Pressure Reset with other SOOs 

The pressure reset SOO has potential interactivity with other SOOs listed below. Cumulatively, these may also interact with the overall heating plant and water- or air-cooled chilled water plant.  

<strong>Economizing and Demand Controlled Ventilation (DCV)</strong> – Static pressure reset only operates when a zone is occupied, and therefore interacts with DCV. If a zone is unoccupied, DCV will call for the damper to close to the minimum airflow needed for ventilation. If more zones are unoccupied, airflow demands drop and the pressure should reset downward due to occupancy rather than lower space conditioning demands. 

<strong>Supply Air Temperature Reset</strong> – There is a clear interaction between supply air temperature reset and static pressure reset. If supply air temperature is lowered, then the flow – and thereby the pressure –must increase to supply the same amount of energy to a zone, and vice versa. Trane (2016) points out that these two SOOs must be finely tuned during commissioning to avoid instability. Seidl (2008) states that the T&R logic of these two resets are likely to be driven by different zones, and therefore a single zone is unlikely to cause instability. 

<strong>Zone Temperature Reset</strong> – BASs limit the range that occupants can reset zone temperatures to keep setpoint near design conditions. If a zone were to be reset too far from design conditions, it might become a so-called “rogue zone” (i.e., where boxes are always wide open) that then dominates the static pressure reset algorithm. 

## Static Pressure Reset SOO Calculation Methodology 

One underlying assumption regarding this SOO is that the heating and cooling loads for the zones being served do not change during the pre- and post-retrofit periods and are correlated to outdoor air temperature and hours of operation. The hourly electrical energy is summed by OAT and coincident operating hours, and a regression model is developed. This is used with climate normal year data to develop an estimate of annual fan and motor electrical energy consumption.  

## References 

- ​​​ASHRAE. (2018). High Performance Sequences of Operation for HVAC Systems. Atlanta, GA: ASHRAE.
- ​ASHRAE. (2019). Standard 90.1-2019: Energy standard for buildings except low-rise residential buildings. ASHRAE. 
- ​Johnson Controls. (n.d.). Air handling unit reset application note: Sequence of operation – Winter mode. Retrieved 2021, from https://docs.johnsoncontrols.com/bas/r/Metasys/en-US/Air-Handling-Unit-Reset-Application-Note/AHU-Reset-Control-System 
- ​New York City Department of Buildings. (2020). New York City Energy Conservation Code (NYCECC). Retrieved 2021, from Section C403.6.8.: Chapter C4 Commercial Energy Efficiency: Commercial Energy Efficiency, New York City Energy Code 2020 | UpCodes 
- ​Seidl, R. (2008). Using Demand Based Reset Strategies. National Conference on Building Commissioning. 
- ​Trane. (2016). Multiple-zone VAV systems - Finding the Right Balance for VAV Energy Savings. Trane Engineers Newsletter, 45(3), 1-7. 