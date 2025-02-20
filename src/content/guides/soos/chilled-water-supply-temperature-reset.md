---
title: Chilled Water Supply Temperature Reset
type: soo
layout: guide
excerpt: The goal of CHWST reset is to use less energy during times of lower cooling demand.
soo_id: 1
thumbnail_image: "/images/hero/measurement-guide-thumb-placeholder.jpg"
associated_components:
  - Constant-speed, Constant-volume Fan and Motor
related_components:
  - Constant-speed, Constant-volume Fan and Motor
url: "/documents/soos/chilled-water-supply-temperature-reset"
---

## General Overview

On cooler days during the cooling season, the chilled water supply temperature (CHWST) can be increased (i.e., reset) in a central cooling plant based on the reduced cooling load. The sequence of operation (SOO) uses outdoor air temperature (OAT), chilled water return temperature, or the average cooling coil valve positions of the AHUs served by the chiller as a proxy for the cooling load. CHWST reset saves energy by optimizing the central cooling plant energy consumption and by minimizing AHU reheat calls.

The goal of CHWST reset is to use less energy during times of lower cooling demand. When OAT is lower, the rate of cooling energy supplied to the zones is moderated. If the AHU supply air temperature is simultaneously reset, the chilled water temperature that is supplied to the AHU cooling coils may also be moderated. Besides making the heat transfer throughout the system more efficient, the likelihood of VAV box reheat calls during the cooling season is reduced.

{{< admonition type="note" >}}
NYC Energy Conservation Code (Section C403.4.4) and ASHRAE 90.1 (Section 6.5.4.4 – Chilled- and Hot-Water Temperature Reset Controls) requires CHWST reset in new or replaced central cooling plants greater than 300,000 Btu/hr. The code calls for CHWST reset based on input from three possible variables: OAT, cooling coil valve position, or chilled water return temperature.
{{< /admonition>}}

## Basic Control Logic

SOOs are feedback loops that employ a combination of sensors, controllers, and actuators to impact a process and maintain a desired state. For example, a thermostat provides a signal to a controller, and the controller sends a signal to the furnace. When the temperature falls below a certain setpoint, the controller sends a signal to the furnace to fire up and to turn on the air handler to provide heated air to the conditioned space. Once the temperature reaches the desired set point, the controller sends a signal to reduce the fan speed and/or to turn off the furnace.

Figure 1 presents a schematic of the general principle of the CHWST reset control feedback loop. When the facility needs cooling, but the OAT is not extremely high, the building automation system (BAS) raises the CHWST temperature setpoint. The CHWST temperature sensor provides the feedback signal; based on the measured error, the BMS coordinates the central chilled water plant components (e.g., cooling tower, condenser and chilled water pumps, chiller compressor) to moderate the CHWST to meet the new setpoint.

figure 1

## Algorithm for the Sequence of Operation

The general CHWST reset algorithm is described in the ASHRAE handbook, “2019 ASHRAE HVAC – Applications”. The algorithm is implemented differently depending on the input control variable: OAT, cooling coil valve position, or chilled water return temperature.