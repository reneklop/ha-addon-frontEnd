 const en = {
    common: {
        success: {
            getdevice: 'Get device list success'
        },
        error: {
            getcontent: 'Get content failed',
            getdevice: 'Get device list failed',
        },
        text: {
            signin: 'Sign in',
            signout: 'Sign out',
            feedback: 'Feedback',
            loading: 'Processing, please wait...',
        },
        slogan: 'Works with everything',
        downloadapp: 'Download eWeLink App now',
        syncLovelace: 'Sync Lovelace Card',
        sync: {
            success: 'Sync success',
            failed: 'Sync failed',
        },
        tab:{
            ewelinkTab:'eWeLink Devices',
            haDeviceTab:'Sync Home Assistant Devices (Beta)'
        },
        hidedevice: 'Hide offline or unsupported devices',
        ok: 'OK',
        cancel: 'Cancel'
    },

    form: {
        placeholder: {
            country: 'Country',
            username: 'Phone No. / Email',
            password: 'Password',
        },
        error: {
            nocountry: 'Please select your country',
            nousername: 'Please input your phone number or email',
            nopassword: 'Please input your password',
            login: 'Login failed, { msg }',
        },
        success: {
            login: 'Login success',
            logout: 'Logout success',
        },
    },

    card: {
        uiid190chart: {
            today: 'Today',
            currentMonth: 'Current Month',
            power: 'Power'
        },
        uiid181mode: {
            manual: 'Manual',
            temp: 'Temperature',
            humi: 'Humidity',
        },
        unsupport: {
            needsignin: 'Device has been discovered on the LAN, please sign in for more information',
            notbelong: 'Device is not under your account',
            notsupport: 'Device is not supported currently',
        },
        rhythm: 'Rhythm',
        status: 'Status',
        remotenum: 'Number of remotes',
        channel: 'Channel',
        humidity: 'Humidity',
        temperature: 'Temperature',
        dry: 'Dry',
        wet: 'Wet',
        cold: 'Cold',
        cool: 'Cool',
        warm: 'Warm',
        hot: 'Hot',
        mode: 'Mode',
        voltage: 'Voltage',
        current: 'Current',
        realtimestats: 'Realtime stats',
        power: 'Power',
        realpower: 'Real power',
        reactivepower: 'Reactive power',
        apparentpower: 'Apparent power',
        doorsensor: 'Door sensor',
        doorsensoropen: 'Open',
        doorsensorclose: 'Close',
        brightness: 'Brightness',
        colortemp: 'Color temp.',
        manual: 'Manual',
        curtainallon: 'All On',
        curtainalloff: 'All Off',
        color: 'Color',
        darkest: 'Darkest',
        zigbee: {
            doorlock: 'Close',
            dooropen: 'Open',
            click: 'Click',
            doubleclick: 'Double Click',
            longclick: 'Long Press',
            motion0: 'Clear',
            motion1: 'Motion Detected',
            waterleak: 'Leak detected',
            waternoleak: 'No leak detected',
        },
        fanSwitch: 'Fan',
        lightSwitch: 'Light',
		cantOptShareDevice: 'Only the device owner can edit.'
    },

    modal: {
        signoutConfirm: 'Sign out',
        removeEntityCheck: 'Delete all the entities in Home Assistant when logging out',
        resetConsumption: 'Reset Consumption',
        confirm: 'Confirm',
        cancel: 'Cancel',
        confirmToReset: 'Confirm to reset consumption on device screen to 0 kWh?',
        feeRate: 'Rate',
        kwh: 'kWh',
        usage: 'Usage',
        energyOverview: 'Energy Overview',
        mo_day: 'MO/DAY',
        yr_mo: '(YR/MO)',
        day: 'DAY',
        mo: 'MO',
        half_yr: 'Half YR',
        highest: 'Highest',
        lowest: 'Lowest',
        download: 'DOWNLOAD',
        temp: 'Temp.',
        hum: 'Humidity',
        time: 'Time',
        date: 'Date',
        curTemp: 'Current Temp.',
        curHumd: 'Current Humidity',
        netled: 'Network Indicator',
        interlock: 'Interlock Mode',
        interlocktip: 'Inching mode & Power-on state will be disabled',
        entitydisable: 'Disable Entity',
        entitydisabletip: 'Disabled entities will not be added to Home Assistant',
        channelSettings: 'Channel Settings',
        deviceSettings: 'Device Settings',
        stats: 'Stats',
        realtimeStats: 'Realtime stats',
        history: 'History',
        deviceName: 'Device Name',
        channelName: 'Channel Name',
        remoteName: 'Remote Name',
        buttonName: 'Button Name',
        powerOnState: {
            name: 'Power-on State',
            on: 'On',
            off: 'Off',
            stay: 'Last state',
        },
        temperatureUnit: {
            name: 'Temperature unit',
            c: 'Celsius[℃]',
            f: 'Fahrenheit[℉]',
        },
        inchingmode: 'Inching mode',
        firmwareUpgrade: {
            title: 'Firmware Upgrade',
            nonLatest: 'Newest version available: { version }',
            latest: 'Newest version',
        },
        minute: 'Minute',
        second: 'Second',
        from: 'From',
        to: 'To',
        consumption: 'Consumption',
        consumed: 'Consumed',
        mode: 'Mode',
        modeOps: {
            bright: 'Bright',
            sleep: 'Sleep',
            reading: 'Reading',
            party: 'Party',
            night: 'Night',
            relax: 'Relax',
            soft: 'Soft',
            vivid: 'Vivid',
            computer: 'Computer',
            work: 'Work',
            nightlight: 'Night Light',
            read: 'Read',

            colorful: 'Colorful',
            colorfulgra: 'Colorful Gradient',
            colorfulbre: 'Colorful Breath',
            rgbstr: 'RGB Strobe',
            rgbgra: 'RGB Gradient',
            rgbpul: 'RGB Pulse',
            rgbbre: 'RGB Breath',
            diypul: 'DIY Pulse',
            diybre: 'DIY Breath',
            diygra: 'DIY Gradient',
            diystr: 'DIY Strobe',
        },
        miniR3: {
            on: 'On',
            off: 'Off',
            remove: 'Delete',
            scene: 'Scene',
			inchingOn: 'InchingON',
			inchingOff: 'InchingOFF'
        },
    },
    haDevice:{
        status:{
            disconnect:'Disconnecting',
            connectError:'Connection Error'
        },
        controlHaInEWeLink:'Control your Home Assistant devices in eWeLink APP',
        controlWay:'Enable sliding buttons to sync your Home Assistant devices to eWeLink, then control all your devices via eWeLink APP and NSpanel and customize scenes with eWeLink supported devices.',
        deviceList:'Devices List',
        helpText:'Help',
        termsService:'Terms of Service',
        allSync:'All devices sync to eWeLink APP',
        agree:'Agree',
        disAgree:'Disagree',
        loginFirst:'Please log in to your eWeLink  account first',
        noDevice: 'No available device',
        syncDeviceLimit: 'The number of synchronized devices reached the upper limit',
        table: {
            no: 'No.',
            deviceNameHa: 'Device Name',
            deviceNameCk: 'Device Name (eWeLink)',
            syncToCk: 'Sync to eWeLink',
            sync: 'Sync',
            unsync: 'Unsync',
            ok: 'OK',
            reset: 'Reset',
            synced: 'Synced',
            unsynced: 'Unsynced',
            noData: 'No data'
        }
    }
};
export default en
