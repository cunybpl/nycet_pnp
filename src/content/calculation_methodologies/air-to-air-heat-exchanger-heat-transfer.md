---
title: Air-to-air Heat Exchanger Heat Transfer
type: calculation
layout: calculation_methodology
calculation_methodology_id: 8
excerpt: 
url: "/documents/calculation-methodology/air-to-air-heat-exchanger-heat-transfer"
---

## Introduction 

This calculation methodology is based on the 2020 ASHRAE Handbook – Systems and Equipment, Chapter 26. The calculator is used to estimate a full year of sensible and latent heat transfer in an energy recovery ventilation (ERV) system. This methodology assumes that the air handling unit (AHU) uses a variable speed supply fan, and that the energy recovery component is a rotary wheel. Figure 1 shows an example of an ERV system.  

<a href="/images/calculation-methodology/2024_0529_AtA HX_figure 1.jpg">
<figure class="figure">
  <img src="/images/calculation-methodology/2024_0529_AtA HX_figure 1.jpg" class="figure-img img-fluid rounded" alt="Figure 1. An ERV system with a rotary wheel heat exchanger.">
  <figcaption class="figure-caption text-left">Figure 1. An ERV system with a rotary wheel heat exchanger.</figcaption>
</figure>
</a>

This methodology works with hourly data only and each measurement is taken at the start of the hour for a minimum duration of six weeks. If the ERV system is used during both the heating and cooling seasons, then six weeks of data per season is needed. Data is used to calculate heat transfer for the measurement period first, then is extrapolated to a full year. Measurement points are shown in Figure 2 and the variables to measure are listed in Table 2. 

<a href="/images/calculation-methodology/2024_0529_AtA HX_figure 2.jpg">
<figure class="figure">
  <img src="/images/calculation-methodology/2024_0529_AtA HX_figure 2.jpg" class="figure-img img-fluid rounded" alt="Figure 2. ERV system with measurement points.">
  <figcaption class="figure-caption text-left">Figure 2. ERV system with measurement points.</figcaption>
</figure>
</a>

Section A.1 describes how to calculate the sensible and latent heat transfer for the duration of the measurement period. If six weeks of data is collected, then heat transfer will be calculated for each hour interval for those six weeks. Sensible and latent effectiveness are a measure of the performance of the ERV system. Effectiveness is the actual heat transfer divided by the maximum possible heat transfer by the heat exchanger. These values are calculated in section A.1 for each hour interval and are used in section A.2 to estimate the full-year heat transfer. 
 
To calculate latent heat transfer and effectiveness, first the humidity ratio $(lb_m/lb_m)$ must be calculated. Table 1 summarizes the equations used to determine humidity ratio for a given relative humidity value. The calculator selects the appropriate equation based on the measured hourly relative humidity and then uses the measured hourly temperature to run the calculation (CUNY BPL BRT, 2022, pp. 22). The equations in Table 1 result in a humidity ratio with units of grains of water per pound of dry air (grains/lb). The calculator performs an additional calculation to convert the units of grain/lb to $lb_m/lb_m$. 

<table markdown="1">
<caption>

Table 1. Humidity Ratio Equations for Various Relative Humidity Values Based on Dry-Bulb Temperature.[^1]

</caption>
    <thead>
        <tr>
            <td>
                <p><strong>Relative Humidity (%)</strong></p>
            </td>
            <td>
                <p><strong>Humidity Ratio Equation</strong></p>
            </td>
        </tr>
    <tbody>
        <tr>
            <td>
                <p>$10$</p>
            </td>
            <td>
                <p>$W = 0.0000361T^3 - 0.0020357T^2 + 0.1276984T - 0.5452381$</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>$20$</p>
            </td>
            <td>
                <p>$W = 0.0000750T^3 - 0.0044762T^2 + 0.2739286T - 1.1180952$</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>$30$</p>
            </td>
            <td>
                <p>$W = 0.0001126T^3 - 0.0066310T^2 + 0.4050469T - 1.9071429$</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>$40$</p>
            </td>
            <td>
                <p>$W = 0.0001530T^3 - 0.0091548T^2 + 0.5507684T - 2.6595238$</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>$50$</p>
            </td>
            <td>
                <p>$W = 0.0001970T^3 - 0.0121548T^2 + 0.7163745T - 3.6595238$</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>$60$</p>
            </td>
            <td>
                <p>$W = 0.0002407T^3 - 0.0151310T^2 + 0.8841486T - 4.7119048$</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>$70$</p>
            </td>
            <td>
                <p>$W = 0.0002826T^3 - 0.0176905T^2 + 1.0265043T - 5.3857143$</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>$80$</p>
            </td>
            <td>
                <p>$W = 0.0003303T^3 - 0.0211429T^2 + 1.2117316T - 6.6047619$</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>$90$</p>
            </td>
            <td>
                <p>$W = 0.0003785T^3 - 0.0245833T^2 + 1.3932179T - 7.7880952$</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>$100$</p>
            </td>
            <td>
                <p>$W = 0.0004270T^3 - 0.0280000T^2 + 1.5725361T - 8.9380952$</p>
            </td>
        </tr>
    </tbody>
</table>

<p class="step-indent">Where,</p>
<p class="equation">$T =$ hourly measured air temperature of the respective air stream (F)</p>
<p class="equation">$W_g =$ humidity ratio (grains/lb)</p>

To estimate heat transfer for a full year, simple linear regression (used to assess the relationship between two variables) is performed in Microsoft Excel using the LINEST function. These calculation steps are described in more detail in Section A.2. 

Section A.3 describes how to calculate the electrical energy consumption of the supply and return fan motors using hourly power draw data. The hourly data is used to develop an average hourly schedule of both fan motors for all seven days of the week as a proxy of the occupancy schedule of the facility. This occupancy schedule is used in Section A.2 to conduct the simple linear regressions. 

## Calculator

<table>
    <caption>Table 2. Air-to-air heat transfer calculator</caption>
    <thead>
        <tr>
            <td>
                <p><strong>Calculator (Downloadable Link)</strong></p>
            </td>
            <td>
                <p><strong>Description</strong></p>
            </td>
            <td>
                <p><strong>Required Data To Use This Calculator</strong></p>
            </td>
        </tr>
    <tbody>
        <tr>
            <td>
                <a href="/calculators/air-to-air-heat-exchanger-heat-transfer/air_to_air_heat_transfer_calculator_2023_0706.xlsx" download>Air-to-air Heat-exchanger Heat-transfer Calculator.xlsx</a>
            </td>
            <td>
                <p>Uses measured air flowrate, fan power and runtime, and temperature to calculate total annual heat transfer and energy savings for an ERV.</p>
            </td>
            <td>
                <ul>
                    <li><a href="/documents/measurement-technique/system-air-temperature">System air temperature (F)</a></li>
                    <li><a href="/documents/measurement-technique/relative-humidity">Relative air humidity (%)</a></li>
                    <li><a href="/documents/measurement-technique/electrical-spot-measurement">Fan motor power (kW)</a></li>
                    <li><a href="/documents/measurement-technique/outdoor-air-temperature">Outdoor air temperature (F)</a></li>
                    <li>Air flow rate (ft$^3$/min)</li>
                </ul>
            </td>
        </tr>
    </tbody>
</table>

## Air-to-air Heat Exchanger Calculations

### A.1: Heat Transfer for the Measurement Period

The following methodology is used to calculate the sensible and latent heat transferred by the ERV system during the measurement period only. Sensible and latent effectiveness are also calculated in this process. All data used in section A.1 should rely on data being measured with either data loggers or BMS historical trends. Measured data used in this section is summarized in Table 3. 

<table>
    <caption>Table 3. Hourly measured data required to calculate heat transfer.</caption>
    <thead>
        <tr>
            <td>
                <p><strong>Hourly Measured Values</strong></p>
            </td>
            <td>
                <p><strong></strong></p>
            </td>
        </tr>
    <tbody>
        <tr>
            <td>
                <p>$$T_1, T_2, T_3, T_4$$</p>
            </td>
            <td>
                <p>Temperatures (F)</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>$$RH_1, RH_2, RH_3$$</p>
            </td>
            <td>
                <p>Relative Humidity (%)</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>$$Q_2, Q_3$$</p>
            </td>
            <td>
                <p>Air flow rate (ft$^3$/min)</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>$$P_1, P_2$$</p>
            </td>
            <td>
                <p>Fan motor Power (kW)</p>
            </td>
        </tr>
    </tbody>
</table>

1. Calculate the mass flow rate of supply air leaving the ERV for each hour interval.

<p class="equation equation-center">\begin{equation} \dot{m_2} = Q_2/v \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$\dot{m_2} =$ hourly mass flow rate of supply air leaving the ERV (lb$_m$/min)</p>
<p class="equation">$Q_2 =$ hourly air flow rate of supply air leaving the ERV (ft$^3$/min)</p>
<p class="equation">$v =$ specific volume of air, 12.49 (ft$^3$/lb)</p>

2. Calculate the mass flow rate of return air entering the ERV for each hour interval.

<p class="equation equation-center">\begin{equation} \dot{m_3} = Q_3/v \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$\dot{m_3} =$ hourly mass flow rate of return air entering the ERV (lb$_m$/min)</p>
<p class="equation">$Q_3 =$ hourly air flow rate of return air entering the ERV (ft$^3$/min)</p>
<p class="equation">$v =$ specific volume of air, 12.49 (ft$^3$/lb)</p>

3. Calculate the humidity ratio for outside air entering the ERV ($W_1$), supply air leaving the ERV ($W_2$) and return air entering the ERV ($W_3$) for each hour interval. In this step, the measured hourly temperature and relative humidity data of the respective air stream is used with the equations in Table 1 to determine the humidity ratio for that hour. In this same step, the units are converted from grains/lb to lb$_m$/lb$_m$. 

<p class="equation equation-center">\begin{equation} W_n = 0.000142857 * W_g \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$W_n =$ humidity ratio of a given air stream (lb$_m$/lb$_m$)</p>
<p class="equation">$0.000142857 =$ constant value, (lb$_m$/lb$_m$)</p>
<p class="equation">$W_g =$ humidity ratio calculated from Table 1</p>

4. Calculate sensible heat transferred by the ERV for each hour interval.

<p class="equation equation-center">\begin{equation} q_s = \dot{m}_2c(T_1 - T_2) \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$q_s =$ sensible heat transferred by the ERV each hour (Btu/h)</p>
<p class="equation">$c =$ specific heat of air at normal atmospheric pressure, 0.243 (Btu/lb F)</p>
<p class="equation">$\dot{m}_2 =$ hourly mass flow rate of supply air leaving the ERV (lb$_m$/min)</p>
<p class="equation">$T_1 =$ hourly temperature of outside air entering the ERV (F)</p>
<p class="equation">$T_2 =$ hourly temperature of supply aire leaving the ERV (F)</p>

5. Calculate latent heat transferred by the ERV for each hour interval.

<p class="equation equation-center">\begin{equation} q_L = \dot{m}_2h(W_1 - W_2) \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$q_L =$ latent heat transferred by the ERV each hour (Btu/h)</p>
<p class="equation">$h =$ latent heat of vaporization, 970.1 (Btu/lb)</p>
<p class="equation">$\dot{m}_2 =$ hourly mass flow rate of supply air leaving the ERV (lb$_m$/min)</p>
<p class="equation">$W_1 =$ hourly humidity ratio of outside air entering the ERV (lb$_m$/lb$_m$)</p>
<p class="equation">$W_2 =$ hourly humidity ratio of supply air leaving the ERV (lb$_m$/lb$_m$)</p>

6. Heat transfer should be calculated only when the energy/heat recovery mode is on. This can be determined by checking the temperature difference across the recovery system in both the supply-air side and the return-air side. Another condition is that the supply fan motor must be running for heat transfer to occur. Sometimes the ERV is off and the supply fan motor is on, in this scenario we cannot assume heat transfer occurs. 

<p class="equation equation-center">\begin{equation} \text{If} \hspace{2mm} \begin{cases} T_1 - T_2 > 1 & \text{heat transfer during cooling season}\\
    T_1 - T_2 < -1 & \text{heat transfer during heating season} \\
    -1 < T_1 - T_2 < 1 & \text{no heat transfer occurs} \end{cases} \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$T_1 =$ measured hourly temperature of outside air entering the ERV (F)</p>
<p class="equation">$T_2 =$ measured hourly temperature of supply air leaving the ERV (F)</p>

<p class="equation equation-center">\begin{equation} \text{If} \hspace{2mm} \begin{cases} T_3 - T_4 > 1 & \text{heat transfer during cooling season}\\
    T_3 - T_4 < -1 & \text{heat transfer during heating season} \\
    -1 < T_3 - T_4 < 1 & \text{no heat transfer occurs} \end{cases} \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$T_3 =$ measured hourly temperature of return air entering the ERV (F)</p>
<p class="equation">$T_4 =$ measured hourly temperature of exhaust air leaving the ERV (F)</p>

<p class="equation equation-center">\begin{equation} \text{If} \hspace{2mm} \begin{cases} Q_2 > 0 & \text{heat transfer occurs}\\
    Q_2 < 0 & \text{no heat transfer occurs}  \end{cases} \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$Q_2 =$ air flow rate of supply air leaving the ERV (ft$^3$/min)</p>

<p class="equation equation-center">\begin{equation} \text{If} \hspace{2mm} \begin{cases} Q_3 > 0 & \text{heat transfer occurs}\\
    Q_3 < 0 & \text{no heat transfer occurs}  \end{cases} \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$Q_3 =$ air flow rate of return air entering the ERV (ft$^3$/min)</p>

<h3>Sensible and Latent Heat Effectiveness</h3>

Sensible and latent heat effectiveness has the same conditions as heat transfer where effectiveness should be calculated only when the energy/heat recovery mode is on and the supply fan motor must be running.  

1. Calculate the latent effectiveness for each hour interval.

<p class="equation equation-center">\begin{equation} \varepsilon_L = \frac{\dot{m}_2h(W_1 - W_2)}{\dot{m}_{min}h(W_1 - W_3)} \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$\varepsilon_L =$ hourly latent effectiveness of the ERV</p>
<p class="equation">$h =$ latent heat of vaporization, 970.1 (Btu/lb)</p>
<p class="equation">$\dot{m}_2 =$ hourly mass flow rate of supply air leaving the ERV (lb$_m$/min)</p>
<p class="equation">$\dot{m}_{min} =$ minimum hourly mass flow rate value (lb$_m$/min)</p>
<p class="equation">$W_1 =$ hourly humidity ratio of outisde air entering the ERV (lb$_m$/lb$_m$)</p>
<p class="equation">$W_2 =$ hourly humidity ratio of supply air leaving the ERV (lb$_m$/lb$_m$)</p>
<p class="equation">$W_3 =$ hourly humidity ratio of return air entering the ERV (lb$_m$/lb$_m$)</p>

2. Calculate the sensible effectiveness for each hour interval.

<p class="equation equation-center">\begin{equation} \varepsilon_s = \frac{\dot{m}_2c(T_1 - T_2)}{\dot{m}_{min}c(T_1 - T_3)} \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$\varepsilon_s =$ hourly sensible effectiveness of the ERV</p>
<p class="equation">$c =$ specific heat of air at normal atmospheric pressure, 0.243 (Btu/lb F)</p>
<p class="equation">$\dot{m}_2 =$ hourly mass flow rate of supply air leaving the ERV (lb$_m$/min)</p>
<p class="equation">$\dot{m}_{min} =$ minimum hourly mass flow rate value (lb$_m$/min)</p>
<p class="equation">$T_1 =$ hourly temperature of outisde air entering the ERV (F)</p>
<p class="equation">$T_2 =$ hourly temperature of supply air leaving the ERV (F)</p>
<p class="equation">$T_3 =$ hourly temperature of return air entering the ERV (F)</p>

### A.2: Heat Transfer for the Full Year  

To estimate the full year heat transfer, the occupancy patterns and schedule defined in the measurement period are extrapolated to the entire year. Supply air flow (Q2), return air flow (Q3), and sensible and latent effectiveness are calculated by performing a regression analysis with the variables listed in Table 4. Regression analysis plots data on a graph and generates a line that traces the distribution of data. The line has a formula associated with it and the formula is used to project the dependent variable for the full year. To accomplish this, the Microsoft Excel function LINEST is used with the values in Table 4. 

<table>
    <caption>Table 4. List of dependent and independent variables used in the regression analysis.</caption>
    <thead>
        <tr>
            <td>
                <p><strong></strong></p>
            </td>
            <td>
                <p><strong>Independent Variable</strong></p>
            </td>
            <td>
                <p><strong>Dependent Variable</strong></p>
            </td>
        </tr>
    <tbody>
        <tr>
            <td>
                <p>Regression 1</p>
            </td>
            <td>
                <p>$P_2$</p>
            </td>
            <td>
                <p>$Q_2$</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Regression 2</p>
            </td>
            <td>
                <p>$P_3$</p>
            </td>
            <td>
                <p>$Q_3$</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Regression 3</p>
            </td>
            <td>
                <p>$Q_2$</p>
            </td>
            <td>
                <p>$\varepsilon_s$</p>
            </td>
        </tr>
        <tr>
            <td>
                <p>Regression 4</p>
            </td>
            <td>
                <p>$Q_2$</p>
            </td>
            <td>
                <p>$\varepsilon_L$</p>
            </td>
        </tr>
    </tbody>
</table>

<h3>Regressions 1 and 2</h3>

There is a cubic relationship between fan motor draw and air flow rate. The equation that describes the relationship between these variables is: 

<p class="equation equation-center">\begin{equation} y = ax^3 + bx^2 + cx + d \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$y =$ dependent variable at each hour for a full year, the value being projects ($Q_2$ and $Q_3$)</p>
<p class="equation">$x =$ independent variable at each hour for a full year, the suply fan motor energy consumption</p>
<p class="equation">$a,b,c,d =$ cubic relationship coefficients</p>

With this formula, the air flow rate Q2 and Q3 can be projected for the full year by plugging in values for x, the supply fan motor power draw. This data is the measured power draw of the supply and return fan motors.

<h3>Regressions 3 and 4</h3> 

These steps yield an assessment of the relationship between the measured air flow rate of supply air leaving the ERV system (Q2) and the sensible and latent heat effectiveness that was calculated in section A.1. The relationship between air flow rate and effectiveness is linear and the equation that describes the relationship is: 

<p class="equation equation-center">\begin{equation} y = mx + b \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$y =$ dependent variable at each hour for a full year, the value being projects (sensible and latent effectiveness)</p>
<p class="equation">$m =$ slope of the line, generated by Excel</p>
<p class="equation">$x =$ independent variable at each hour for a full year, the air flow rate of air leaving the ERV system ($Q_2$)</p>
<p class="equation">$b =$ y-intercept of the line generated by Excel</p>

The values of $Q_2$ that were calculated in the previous section are then plugged into Equation (11) to project sensible and latent heat transfer effectiveness for the full year: 

<p class="equation equation-center">\begin{equation} \varepsilon_s = m(Q_2) + b \end{equation}</p>

<p class="equation equation-center">\begin{equation} \varepsilon_L = m(Q_2) + b \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$\varepsilon_s =$ projected sensible effectiveness</p>
<p class="equation">$\varepsilon_L =$ projected latent effectiveness</p>
<p class="equation">$Q_2 =$ projected air flow rate of supply air leaving the ERV (ft$^3$/min)</p>

After projecting the airflows and effectiveness rates to a full year, the next step is to calculate the hourly mass flow rates and humidity ratios for a full year. 

1. Calculate the mass flow rate of supply aire leaving the ERV for each hour interval for the entire year.

<p class="equation equation-center">\begin{equation} \dot{m}_2 = Q_2/v \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$\dot{m}_2 =$ hourly mass flow rate of supply air leaving the ERV (lb$_m$/min)</p>
<p class="equation">$Q_2 =$ projected hourly air flow rate of supply are leaving the ERV (ft$^3$/min)</p>
<p class="equation">$v =$ specific volume of air, 12.49 (ft$^3$/lb)</p>

2. After projecting the airflows and effectiveness rates to a full year, the next step is to calculate the hourly mass flow rates and humidity ratios for a full year.  

<p class="equation equation-center">\begin{equation} \dot{m}_3 = Q_3/v \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$\dot{m}_3 =$ hourly mass flow rate of return air entering the ERV (lb$_m$/min)</p>
<p class="equation">$Q_3 =$ projected hourly air flow rate of return air entering the ERV (ft$^3$/min)</p>
<p class="equation">$v =$ specific volume of air, 12.49 (ft$^3$/lb)</p>

3. Calculate the humidity ratio for outside air entering the ERV (W1). In this step, the hourly climate normal year (CNY) outside air temperature (OAT) and relative humidity data is used with the equations in Table 1 to determine the humidity ratio for that hour. In this same step, the units are converted from grains/lb to lb$_m$/lb$_m$.

<p class="equation equation-center">\begin{equation} W_n = 0.000142857 * W_g \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$W_n =$ humidity ratio of a given air stream (lb$_m$/lb$_m$)</p>
<p class="equation">$0.000142857 =$ constant value, (lb$_m$/lb$_m$)</p>
<p class="equation">$W_g =$ humidity ratio calculated from Table 1</p>

4. Estimate the hourly humidity ratio of supply air leaving the ERV for the full year. In this equation, it is assumed that the latent heat of vaporization is constant. 

<p class="equation equation-center">\begin{equation} W_2 = \frac{\dot{m}_2W_1 - \varepsilon_L\dot{m}_{min}(W_1-W_3)}{\dot{m}_2} \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$W_2 =$ hourly humidity ratio of supply air leaving the ERV (lb$_m$/lb$_m$)</p>
<p class="equation">$W_1 =$ hourly humidity ratio of outside air entering the ERV (lb$_m$/lb$_m$)</p>
<p class="equation">$W_3 =$ hourly humidity ratio of return air entering the ERV (lb$_m$/lb$_m$)</p>
<p class="equation">$\varepsilon_L =$ projected hourly latent effectiveness of the ERV</p>
<p class="equation">$\dot{m}_{min} =$ minimum mass flow rate value (lb$_m$/min)</p>
<p class="equation">$\dot{m}_2 =$ hourly mass flow rate data of supply air leaving the ERV (lb$_m$/min)</p>

5. Estimate the temperature of supply air leaving the ERV for the full year. In this equation, it is assumed that specific heat of air is constant. 

<p class="equation equation-center">\begin{equation} T_2 = \frac{\dot{m}_2T_1 - \varepsilon_s\dot{m}_{min}(T_1-T_3)}{\dot{m}_2} \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$T_2 =$ hourly temperature of supply air leaving the ERV (F)</p>
<p class="equation">$T_1 =$ hourly temperature of outside air entering the ERV (F)</p>
<p class="equation">$T_3 =$ hourly temperature of return air entering the ERV (F)</p>
<p class="equation">$\varepsilon_s =$ projected hourly sensible effectiveness of the ERV</p>
<p class="equation">$\dot{m}_{min} =$ minimum mass flow rate value (lb$_m$/min)</p>
<p class="equation">$\dot{m}_2 =$ hourly mass flow rate data of supply air leaving the ERV (lb$_m$/min)</p>

CUNYBPL assumes that T3 and W3 are constant values with the reasoning being that occupants will want the same indoor air temperature regardless of the season. It is up to the heating and cooling plants to maintain that setpoint temperature. The next step is to calculate sensible and latent heat transfer. 

6. Calculate sensible heat transferred by the ERV for each hour interval for the full year.

<p class="equation equation-center">\begin{equation} q_s = \dot{m}_2c(T_1 - T_2) \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$q_2 =$ sensible heat transferred by the ERV each hour (Btu/h)</p>
<p class="equation">$c =$ specific heat of air at normal atmospheric pressure, 0.243 (Btu/lb F)</p>
<p class="equation">$\dot{m}_2 =$ hourly mass flow rate of supply air leaving the ERV (lb$_m$/min)</p>
<p class="equation">$T_1 =$ hourly temperature of outside air entering the ERV (F)</p>
<p class="equation">$T_2 =$ hourly temperature of suply air leaving the ERV (F)</p>

7. Calculate latent heat transferred by the ERV for each hour interval for the full year. 

<p class="equation equation-center">\begin{equation} q_L = \dot{m}_2h(W_1 - W_2) \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$q_2 =$ latent heat transferred by the ERV each hour (Btu/h)</p>
<p class="equation">$h =$ latent heat of vaporization, 970.1 (Btu/lb)</p>
<p class="equation">$\dot{m}_2 =$ hourly mass flow rate of supply air leaving the ERV (lb$_m$/min)</p>
<p class="equation">$W_1 =$ hourly humidity ratio of outside air entering the ERV (lb$_m$/lb$_m$)</p>
<p class="equation">$W_2 =$ hourly humidity ratio of suply air leaving the ERV (lb$_m$/lb$_m$)</p>

8. Heat transfer should be calculated only when the energy/heat recovery mode is on. This can be determined by checking the temperature difference across the recovery system in both the supply-air side and the return-air side, and air-flow rate across the heat exchanger. Air flow is happening when the supply fan motor and exhaust fan motor are on. Sometimes the ERV rotary wheel is off and air flow bypasses the rotary wheel when the supply fan motor is on, in this scenario we cannot assume heat transfer occurs.   
 
<p class="equation equation-center">\begin{equation} \text{If} \hspace{2mm} \begin{cases} T_1 - T_2 > 1 & \text{heat transfer during cooling season}\\
    T_1 - T_2 < -1 & \text{heat transfer during heating season} \\
    -1 < T_1 - T_2 < 1 & \text{no heat transfer occurs} \end{cases} \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$T_1 =$ measured hourly temperature of outside air entering the ERV (F)</p>
<p class="equation">$T_2 =$ measured hourly temperature of supply air leaving the ERV (F)</p>

<p class="equation equation-center">\begin{equation} \text{If} \hspace{2mm} \begin{cases} T_3 - T_4 > 1 & \text{heat transfer during cooling season}\\
    T_3 - T_4 < -1 & \text{heat transfer during heating season} \\
    -1 < T_3 - T_4 < 1 & \text{no heat transfer occurs} \end{cases} \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$T_3 =$ measured hourly temperature of return air entering the ERV (F)</p>
<p class="equation">$T_4 =$ measured hourly temperature of exhaust air leaving the ERV (F)</p>

<p class="equation equation-center">\begin{equation} \text{If} \hspace{2mm} \begin{cases} Q_2 > 0 & \text{heat transfer occurs}\\
    Q_2 < 0 & \text{no heat transfer occurs}  \end{cases} \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$Q_2 =$ air flow rate of supply air leaving the ERV (ft$^3$/min)</p>

<p class="equation equation-center">\begin{equation} \text{If} \hspace{2mm} \begin{cases} Q_3 > 0 & \text{heat transfer occurs}\\
    Q_3 < 0 & \text{no heat transfer occurs}  \end{cases} \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$Q_3 =$ air flow rate of return air entering the ERV (ft$^3$/min)</p>

### A.3: Annual Supply Fan Energy Consumption 

This calculation methodology assumes that the power draw of the supply and exhaust fan motors were measured with a power logger at one-hour intervals for a minimum of six weeks. The power logger should have measured the three phases of the panelboard. The following formulas will calculate three phase power first. Next, the calculator reduces the dataset to an hourly schedule for all seven days of the week. This schedule is used to determine when heat transfer occurs. Then, the schedule is extrapolated to a full year and the resultant value is the estimated annual energy consumption of the fan motors. 

1. Calculate the hourly three-phase power draw of the motor by summing the single-phase power of each electrical line for each hour interval.

<p class="equation equation-center">\begin{equation} \overline{kW}_{h,3P} = \sum_{n=1}^3 \overline{kW}_{h,n} \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$\overline{kW}_{h,3P} =$ hourly three-phase power draw of the motor (kW)</p>
<p class="equation">$\overline{kW}_{h,n} =$ hourly single-phase power for electrical line n (kW)</p>

2. Calculate average energy consumption for each hour of each day of the week.  This step generates an hourly schedule for a week and this schedule is used to calculate the full year heat transfer. In this step, the hourly power draw (kW) gets converted to hourly energy consumption (kWh) because data is in one-hour intervals[^2].

<p class="equation equation-center">\begin{equation} \overline{kWh}_{d,h} = \frac{\sum_1^{N_f(d,h)} \overline{kW}_{h,3P}}{N_f(d,h)} \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$\overline{kWh}_{d,h} =$ average energy consumption for each hour of each day of the week (kWh)</p>
<p class="equation">$\overline{kW}_{h,3P} =$ hourly three-phase power draw of the motor (kW)</p>
<p class="equation">$N_f(d,h) =$ total number of data points that fall on day of week, d, and hour of the day, h</p>

3. Calculate average daily energy consumption for a given day of the week. 

<p class="equation equation-center">\begin{equation} \overline{kWh}_{d,w} = \sum_{n=0}^{23} \overline{kWh}_{d,h} \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$\overline{kWh}_{d,w} =$ average daily energy consumption for a given day of the week of the motor</p>
<p class="equation">$\overline{kWh}_{d,h} =$ average energy consumption for each hour of each day of the week (kWh)</p>
<p class="equation">$n =$ hour of the day where 0 is 12:00 a.m. and 23 is 11:00 p.m.</p>

4. Calculate the average energy consumption per day for weekdays. 

<p class="equation equation-center">\begin{equation} \overline{kWh}_{Wd} = \frac{\sum_{n=2}^6 \overline{kWh}_{wd,n}}{5} \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$\overline{kWh}_{Wd} =$ average energy consumption for weekdays (kWh)</p>
<p class="equation">$\overline{kWh}_{wd,n} =$ average energy consumption of each $n$ weekday (kWh)</p>
<p class="equation">$n =$ day of week: 2 = Monday, 3 = Tuesday, ..., 6 = Friday</p>
<p class="equation">$5 =$ constant, weekdays per week</p>

5. Calculate the average energy consumption per day for weekend days. 

<p class="equation equation-center">\begin{equation} \overline{kWh}_{Wed} = \frac{\sum_{n=1}^7 \overline{kWh}_{we,n}}{2} \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$\overline{kWh}_{WEd} =$ average energy consumption for a weekend day (kWh)</p>
<p class="equation">$\overline{kWh}_{we,n} =$ average energy consumption of each $n$ weekend day (kWh)</p>
<p class="equation">$n =$ day of week: 7 = Saturday, 1 = Sunday</p>
<p class="equation">$2 =$ constant, weekend days per week</p>

6. Calculate the annual weekday energy consumption (Worksheet: “Step 4. Results,” cell E3). 

<p class="equation equation-center">\begin{equation} \overline{kWh}_{WdYr} = \overline{kWh}_{Wd} * (261 - X) \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$\overline{kWh}_{WdYr} =$ estimated annual weekday energy consumption</p>
<p class="equation">$\overline{kWh}_{Wd} =$ average weekday energy consumption (kWh)</p>
<p class="equation">$X =$ number weekdays that are adjusted to a weekend day (holidays)</p>
<p class="equation">$261 =$ constant, number of weekdays per year</p>

7. Calculate the total weekend energy consumption (Worksheet: “Step 4. Results,” cell E6). 

<p class="equation equation-center">\begin{equation} \overline{kWh}_{WEdYr} = \overline{kWh}_{WEd} * (104 + X) \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$\overline{kWh}_{WEdYr} =$ estimated annual weekend day energy consumption</p>
<p class="equation">$\overline{kWh}_{WEd} =$ average weekend day energy consumption (kWh)</p>
<p class="equation">$X =$ number weekdays that are adjusted to a weekend day (holidays)</p>
<p class="equation">$104 =$ constant, number of weekends per year</p>

8. Calculate the total annual energy consumption of the motor. 

<p class="equation equation-center">\begin{equation} \overline{kWh}_{ann} = \overline{kWh}_{WdYr} + \overline{kWh}_{WEdYr} \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$\overline{kWh}_{ann} =$ estimated annual energy consumption of the motor (kWh)</p>
<p class="equation">$\overline{kWh}_{WdYr} =$ estimated annual weekday energy consumption (kWh)</p>
<p class="equation">$\overline{kWh}_{WEdYr} =$ estimated annual weekend day energy consumption</p>

9. Calculate the total annual energy consumption of the supply and exhaust fan motors. 

<p class="equation equation-center">\begin{equation} \overline{kWh}_{T,ann} = \overline{kWh}_{supply} + \overline{kWh}_{exhaust} \end{equation}</p>

<p class="step-indent">Where,</p>
<p class="equation">$\overline{kWh}_{T,ann} =$ estimated annual energy consumption of the fan motors (kWh)</p>
<p class="equation">$\overline{kWh}_{supply} =$ esimated annual energy consumption of the supply fan motor (kWh)</p>
<p class="equation">$\overline{kWh}_{exhaust} =$ estimated annual energy consumption of the exhaust fan motor (kWh)</p>

## Further Reading

- For general information on Option A M&V guides, please read section 4.2 (starts on page 23) of “M&V Guidelines: Measurement and Verification for Performance-Based Contracts Version 4.0” from the U.S. Department of Energy: https://www.energy.gov/sites/prod/files/2016/01/f28/mv_guide_4_0.pdf#page=23 

- ASHRAE (2020) “2020 ASHRAE Handbook-HVAC Systems and Equipment” Chapter 26. 
 
- CUNY Building Performance Lab (May 2020). “Quantification of Energy Savings from Implementing Building Re-tuning Recommendations.” (pp. 21–22). New York, NY: Department of Citywide Administrative Services.

[^1]: CUNY Building Performance Lab. (n.d.). Quantification of Energy Savings from Implementing BuildingRe-tuning Recommendations (pp. 21–22) [Review of Quantification of Energy Savings from Implementing Building Re-tuning Recommendations]. DCAS.
[^2]: $kWh = kW * h$, where $h = 1$
