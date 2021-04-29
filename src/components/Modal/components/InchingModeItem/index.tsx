import React, { useState, useEffect } from 'react';
import { TimePicker, Switch } from 'antd';
import styles from './index.less';
import moment, { Moment } from 'moment';
import { updateDeviceByWS } from '@/api';
import { IChannelSetting } from '@/types/interface/IModal';
import _ from 'lodash';

const dateFormat = 'mm:ss';
const InchingMode: React.FC<IChannelSetting> = ({ style, apikey, deviceId, index, params, updateFunction }) => {
    // console.log(`ML ~ file: index.tsx ~ line 11 ~ params`, params);
    const [checked, setChecked] = useState(Boolean);
    //  点动时间设置提交
    async function getInchingTime(time: Moment | null) {
        if (!time) return;
        const h = moment(time).get('minute');
        const s = moment(time).get('second');
        let count = 0;
        h === 0 ? (count = s) : (count = h * 60 + s);
        console.log('count', count);
        const param = {
            id: deviceId,
            apikey: apikey,
            params: params,
        };
        // console.log(`ML ~ file: index.tsx ~ line 26 ~ getInchingTime ~ param`, param);
        if (params && params.pulses) {
            param.params?.pulses?.forEach((item) => {
                if (item.outlet === index) _.assign(item, { width: count * 1000 });
            });
        } else {
            _.assign(param.params, { pulseWidth: count * 1000, pulse: 'on' });
        }

        // console.log(`ML ~ file: index.tsx ~ line 28 ~ setInchingTime ~ params`, param);
        const res = await updateDeviceByWS(param);
        // console.log(`ML ~ file: index.tsx ~ line 30 ~ setInchingTime ~ res`, res);
        if (res.error === 0) {
            setChecked(true);
            param.params?.pulses && updateFunction && updateFunction(param.params?.pulses);
        }
    }
    //  点动开关
    async function inchingAction(value: boolean) {
        // console.log(`ML ~ file: index.tsx ~ line 37 ~ inchingAction ~ value`, value);
        const param = {
            id: deviceId,
            apikey: apikey,
            params: {},
        };
        params && params.width && !params.pulseWidth
            ? _.assign(param.params, { pulses: [{ width: 500, outlet: index, pulse: 'off' }] })
            : _.assign(param.params, { pulseWidth: 500, pulse: 'off' });
        if (!value) {
            const res = await updateDeviceByWS(param);
            // console.log(`ML ~ file: index.tsx ~ line 50 ~ inchingAction ~ res`, res);
            res.error === 0 && setChecked(value);
        }
    }
    //  默认点动时间
    function dealInchingTime() {
        if (params?.pulses) {
            const temp = params.pulses.find((item) => item.outlet === index);
            return temp && temp?.width < 1000 ? moment('00:01', dateFormat) : temp && moment(`${formatTime(temp?.width)}`, dateFormat);
        }
        if (params?.width) {
            return params.width < 1000 ? moment('00:01', dateFormat) : moment(`${formatTime(params.width)}`, dateFormat);
        }
    }
    //  格式化点动时间
    function formatTime(time: number) {
        let temp = time / 1000;
        return temp < 60 ? `00:${temp}` : `${Math.floor(temp / 60)}:${temp % 60}`;
    }
    useEffect(() => {
        params?.pulse && params.pulse === 'on' ? setChecked(true) : setChecked(false);
    }, []);
    return (
        <div className={`${styles['inching-mode']} ${style}`}>
            <span className={styles['span-font']}>Inching mode</span>
            <div>
                <TimePicker className={styles['mgr20']} format={dateFormat} defaultValue={dealInchingTime()} onChange={(time) => getInchingTime(time)} />
                <Switch checked={checked} onClick={(value) => inchingAction(value)} />
            </div>
        </div>
    );
};
export default InchingMode;
