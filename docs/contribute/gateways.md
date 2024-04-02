---
outline: deep
---
# Build your own LoRaWAN Gateway

There are many ways to build a LoRaWAN Gateway. In our study case, we want to collect environnemental data from oudoor sensor. Probabilities that gateways are stored also outdoor to mainain a good commmunication with sensors are high, so we need waterproof gateways.

## Ready-to-use Gateway
The easiest way to obtain this is to buy a [ready-to-use Gateway](https://sparwan.com/smart-office-/115-passerelle-lorawan-ug63-868m-6974225038176.html). 

**BUDGET :200€**

::: danger WARNING
Many ready-to-use Gateways are  not compatible with [Chirpstack](https://www.chirpstack.io/docs/). Don't forget to check the userguide and technical manual.

Most ready-made gateways have been designed for indoor use. If you want to use it outdoor, you will have to protect it against water, by storing it in a [waterproof case](https://www.mhzshop.com/shop/Accessoires-MHz/Boites-etanches/Boite-etanche-avec-fixation-mat-203x203x65mm-GentleBOX-JE-200.html?force_sid=2hgj0f0gqk547k0sul2s8sebe0), or by simply choosing a really expansive [adapted Gateway](https://envytech.fr/boutique/milesight-ug67-passerelle-lorawan-exterieure/?attribute_version=Antennes+externes++4G+embarqu%C3%A9&utm_source=Google+Shopping&utm_campaign=TWENGA&utm_medium=cpc&utm_term=16474&gad_source=1).
:::

## Homemade Gateway

The second main method we are going to present here is more complex, and not so much economical. Advantage here is the compaibility : as we completely build the Gateway, we are free to manage its source-code, and so limit compataibily problems with ChirpStack. Our method is inspired by that of the [Tetaneutral project](https://docs.lora.tetaneutral.net/).

::: details What is the Tetraneutral project ?
The aim of this benevol initiativ is to develop a free LoRaWAN Network in Toulouse (FR).

**Gateways**
They propose several gateways model to contribute to their network. The kit IMST Lite Gateway is the most interesting one, and contains : 
- a housing
- a pre-certified concentrator iC880A-SPI
- a Raspberry Pi
- a pre-configured SD-card

To run, it needs a battery and an antenna. 

**Budget** : 320-360€

**Temperature sensor**
They created a test temperature sensor with the following components : 
- Feather M0 : it carries an AM Cortex M0 processor (the same as the Arduino Zéro's one), a LoRa module (SX127x with SPI interface) and has 256Ko of memory.
- DS18B20 temperature sensor
- Battery
- Antenna

**Budget** : 70-100€
:::

### Materials

| Component | Description | Price |
| --- | --- | --- |
| [Raspberry Pi 2 Model B](https://www.ldlc.com/fiche/PB00182827.html) |  | 45€  |
| [Antenna 3.5dBi - 7.5dBi](https://www.distrelec.fr/fr/antenne-wi-fi-blanc-dbi-rp-tnc-male-168-5mm-vis-cisco-air-ant2524dw/p/30244239?trackQuery=cat-DNAV_PL_3525686&pos=2&origPos=2&origPageSize=50&track=true&sid=fcfebca9204ef3f78f3df2c3975f650e60a4bdb0) | | 45€  |
| [Pigtail cable](https://shop.imst.de/wireless-modules/accessories/20/u.fl-to-sma-pigtail-cable-for-ic880a-spi) | | 10€  |
| [iC880A-SPI - LoRaWAN Concentrator 868 MHz](https://shop.imst.de/wireless-modules/lora-products/8/ic880a-spi-lorawan-concentrator-868-mhz) | Multi-channel high performance transmitter/receiver module designed to receive several LoRa packets simultaneously using different spreading factors on multiple channels.  | 150€ |
| [Power supply](https://www.reichelt.com/fr/fr/raspberry-pi-alimentation-5-1-v-2-5-a-micro-usb-prise-eu--rpi-ps-12-5eu-wt-p316266.html?PROVID=2810&gclid=Cj0KCQjwqP2pBhDMARIsAJQ0Czpc3bBkE3_ikJIpAeRvJ_jcr3drtYX6xJQLGIfDlgioRUuo5VOfEC8aAtn5EALw_wcB) | | 10€  |
| [Waterproof case](https://www.mhzshop.com/shop/Accessoires-MHz/Boites-etanches/Boite-etanche-avec-fixation-mat-203x203x65mm-GentleBOX-JE-200.html?force_sid=2hgj0f0gqk547k0sul2s8sebe0) |  | 25€ |
| 7x dual female jumper wires |  | 10€  |
| Micro SD card (4GB) |  | 10€ |
| Ethernet cable |  | 10€ |
| | **Total**  |  **315€**  |

*Source : [TheThingsNetwork](https://www.thethingsindustries.com/docs/gateways/models/raspberry-pi/)*

::: tip What is a shield ? What is the difference with a HAT ?
Arduino shield is a board that can be plugged on top of the Arduino PCB extending its capabilities. A HAT is the same, but for Raspberry Pi
:::
::: details Subsitutes iC880A-SPI
- 8 channels : 
    - [Pi Supply](https://uk.pi-supply.com/products/iot-lora-gateway-hat-for-raspberry-pi)
    - SB Components - [GatePi 8 Channels](https://shop.sb-components.co.uk/products/getpi-8) (uncertain compatibility with ChirpStack)
- 4 channels :
    - SB Components - [GatePi 4 Channels](https://github.com/sbcshop/GatePi-4CH) (uncertain compatibility with ChirpStack)
    - [STMicroelectronics](https://fr.rs-online.com/web/p/modules-de-developpement-de-communication-et-sans-fil/1345557?cm_mmc=FR-PLA-DS3A-_-google-_-CSS_FR_FR_ePMax_Low-_--_-1345557&matchtype=&&gad_source=1&gclid=Cj0KCQjwwYSwBhDcARIsAOyL0fgZlGfEOMV0yRJgKcFtl8YZjrC55VYIhxCdJJ1nJYu-_CbLP0z0FqgaAmgTEALw_wcB&gclsrc=aw.ds)
- 1 channel :
    - SB Components - [LoRa HAT](https://shop.sb-components.co.uk/products/lora-hat-433mhz-868mhz?variant=39626122231891) (uncertain compatibility with ChirpStack)
:::


If your are not friendly with informatic assembly, you can also work with these multi-channels **Gateway kits** : 
- [IMST kit](https://shop.imst.de/wireless-modules/lora-products/36/lite-gateway-demonstration-platform-for-lora-technology?number=409820), for **299€**
- [RAK D0 kit](https://store.rakwireless.com/products/rak7246-lpwan-developer-gateway?variant=36313275465886&utm_source=RAK7246GDeveloperD0%2B&utm_medium=Document&utm_campaign=BuyFromStore), for **100€**

### Assembly

Check [this tutorial](https://www.thethingsindustries.com/docs/gateways/models/raspberry-pi/), made by TheThingsNetwork.

## ChirpStack installation

As explained in the [ChirpStack documentation](https://www.chirpstack.io/docs/), you need to install several packages :
- ChirpStack MQTT Forwarder
- ChirpStack Gateway OS



    
    

