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
        cancel: 'Cancel',
        langSwitch: 'Language switch'
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
		cantOptShareDevice: 'Only the device owner can edit.',
		saturation: 'Saturation',
        offlineTip: 'Device offline'
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
        btnled: 'Button Indicator',
        btnledTip: 'The brightness of button backlight is only adjustable when the device is turned off.',
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

            creek: 'Creek',
			ocean: 'Ocean',
			candle: 'Candle',
			moonlight: 'Moonlight',
			goodnight: 'Night',
			sunrise: 'Sunrise',
			sunshine: 'Sunshine',
			radiant: 'Radiant',
			dreamy: 'Dreamy',
			sunny: 'Sunny',
			festive: 'Festive',
			gorgeous: 'Vivid',
			gentle: 'Gentle',
			passion: 'Passion',
			joy: 'Joy',
			rainbow: 'Rainbow',
			sunset: 'Sunset',

            scene_ble_magic: 'Magic',
			scene_ble_wave: 'Wave',
			scene_ble_race: 'Race',
			scene_ble_flush: 'Flush',
			scene_ble_marquee: 'Marquee',
			scene_ble_jump: 'Jump',
			scene_ble_gradual: 'Gradual',
			scene_ble_strobe: 'Strobe',
			scene_ble_rhy2: 'Magic Forward',
			scene_ble_rhy3: 'Magic Back',
			scene_ble_rhy5: '7 Color Jump',
			scene_ble_rhy6: 'Rgb Jump',
			scene_ble_rhy7: 'Ycp Jump',
			scene_ble_rhy8: '7 Color Strobe',
			scene_ble_rhy9: 'Rgb Strobe',
			scene_ble_rhy10: 'Ycp Strobe',
			scene_ble_rhy11: '7 Color Gradual',
			scene_ble_rhy12: 'RY Gradual',
			scene_ble_rhy13: 'RP Gradual',
			scene_ble_rhy14: 'GC Gradual',
			scene_ble_rhy15: 'GY Gradual',
			scene_ble_rhy16: 'BP Gradual',
			scene_ble_rhy17: 'Red Marquee',
			scene_ble_rhy18: 'Green Marquee',
			scene_ble_rhy19: 'Blue Marquee',
			scene_ble_rhy20: 'Yellow Marquee',
			scene_ble_rhy21: 'Cyan Marquee',
			scene_ble_rhy22: 'Purple Marquee',
			scene_ble_rhy23: 'White Marquee',
			scene_ble_rhy24: '7 Color Race',
			scene_ble_rhy25: '7 Color Race Back',
			scene_ble_rhy26: 'Rgb Race',
			scene_ble_rhy27: 'Rgb Race Back',
			scene_ble_rhy28: 'Ycp Race',
			scene_ble_rhy29: 'Ycp Race Back',
			scene_ble_rhy30: '7 Color Wave',
			scene_ble_rhy31: '7 Color Wave Back',
			scene_ble_rhy32: 'Rgb Wave',
			scene_ble_rhy33: 'Rgb Wave Back',
			scene_ble_rhy34: 'Ycp Wave',
			scene_ble_rhy35: 'Ycp Wave Back',
			scene_ble_rhy36: '7 Color Flush',
			scene_ble_rhy37: '7 Color Flush Back',
			scene_ble_rhy38: 'Rgb Flush',
			scene_ble_rhy39: 'Rgb Flush Back',
			scene_ble_rhy40: 'Ycp Flush',
			scene_ble_rhy41: 'Ycp Flush Back',
			scene_ble_rhy42: '7 Color Flush Close',
			scene_ble_rhy43: '7 Color Flush Open',
			scene_ble_rhy44: 'Rgb Flush Close',
			scene_ble_rhy45: 'Rgb Flush Open',
			scene_ble_rhy46: 'Ycp Flush Close',
			scene_ble_rhy47: 'Ycp flush Open'
        },
        miniR3: {
            on: 'On',
            off: 'Off',
            remove: 'Delete',
            scene: 'Scene',
			inchingOn: 'InchingON',
			inchingOff: 'InchingOFF'
        },
        statsMsg: ' Please tap the Refresh icon to get the latest power metering data.',
        operationFailed: 'Failed. Please try again.',
        minPower: 'Min.power',
        maxPower: 'Max.power',
        minVoltage: 'Min.voltage',
        maxVoltage: 'Max.voltage',
        maxCurrent: 'Max.current',
        ops: 'OPS',
        opsTip: 'Any conditions met ,the device will turn itself off.Set parameters based on user manual.',
        opsDelayClose: 'Delay to switch off',
        opsDelayDesc: 'Only takes effect under overpower and overcurrent protection.Overvoltage protection turns off the device instantaneously by default.',
        minPowerRange: 'Min.powerrange0.1~4800',
        maxPowerRange: 'Max.powerrange0.1~4800',
        minVoltageRange: 'Min.voltagerange90~264',
        maxVoltageRange: 'Max.voltagerange90~264',
        maxCurrentRange: 'Max.currentrange0.1~20',
        minExceedMax: 'The minimum threshold cannot exceed the maximum threshold',
    },
    haDevice:{
        status:{
            disconnect:'Disconnecting',
            connectError:'Connection Error'
        },
        controlHaInEWeLink:'Control your Home Assistant devices in eWeLink APP',
        controlWay:'Sync your Home Assistant devices to the eWeLink ecosystem, and then control them via eWeLink APP, NSPanel, and NSPanel Pro.',
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
            deviceNameHa: 'Device name',
            deviceNameCk: 'Name in eWeLink',
            syncToCk: 'Sorting',
            sync: 'Sync',
            unsync: 'Cancel',
            ok: 'OK',
            reset: 'Reset',
            synced: 'Synced',
            unsynced: 'Not synced',
            noData: 'No data'
        },
        descText: 'Only support Light and Switch'
    }
};
export default en
