
# Robin

- qu'est ce que Lora SX1276 Breakout Board ? 
- Possible Feather M0 + shield ?
- 1 port = 1 capteur ? Peut on mutualiser les messages ? Impact sur Duty cycle ?
- Comment installer picots sur Feather M0 ?


# Romain
J'ai un rasberry, je peux donc installer des librairies ChirpStack. OK. Pour une gateway, quels sont les packages indispensables ?  Selon moi :
- MQTT Forwarder
- ChirpStack Gateway OS
- UDP Packet Forwarder ?

- point kubernet
librairies : https://www.chirpstack.io/docs/chirpstack-gateway-os/install/raspberry-pi.html

# Points à regler :
- FABRICATION CAPTEURS
    - cmb de capteurs sur un Feather M0 ?
    - imperméabilité capteur : boite ?
    - besoin soudure ?
    - trouver des exemples de capteurs intéressants : 
        - temp
        - humidité
        - temp eau (IRSN)
        - humidité terre (Agri)
        - hauteur eau
        - position (GPS)

- ARCHITECTURE GENERALE :
    - topo kubernet
    - ajout device/gateways ==>> PRISE EN MAIN CHIRPSTACK
    - gestion du duty cycle

- FABRICATION GATEWAYS :
    - prix des composants
    - tuto

    sudo dcfldd bs=1M Téléchargen of=/dev/[sd_name]