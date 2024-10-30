import moment from 'moment'

export const getLastMetricValues = (metrics, nodeName, metricNames) => {
    return metricNames.map((metricName) => {
        try {
            const metric = metrics[metricName]
            const result = metric.data.result.find((result) => {
                return [
                    result.metric.node,
                    result.metric.instance,
                    result.metric.kubernetes_node
                ].includes(nodeName)
            })
            return result ? parseFloat(result.values.slice(-1)[0][1]) : 0
        } catch (e) {
            console.log(e)
            return 0
        }
    })
}

export function getMetricLastPoints(metrics) {
    const result = {}
    Object.keys(metrics).forEach((metricName) => {
        try {
            const metric = metrics[metricName]
            if (metric.data.result.length) {
                result[metricName] = +metric.data.result[0].values.slice(-1)[0][1]
            }
        } catch (e) {
            console.log(e)
        }
        return result
    }, {})
    return result
}

export const normalizeMetrics = (metrics, frames = 60) => {
    if (
        metrics === null ||
        metrics.data === null ||
        metrics.data.result === null
    ) {
        return {
            data: {
                resultType: '',
                result: [
                    {
                        metric: {},
                        values: []
                    }
                ]
            },
            status: ''
        }
    }
    const { result } = metrics.data
    if (result.length) {
        if (frames > 0) {
            // fill the gaps
            result.forEach((res) => {
                if (!res.values || !res.values.length) return
                let now = moment()
                    .startOf('minute')
                    .subtract(1, 'minute')
                    .unix()
                let timestamp = res.values[0][0]
                while (timestamp <= now) {
                    timestamp = moment
                        .unix(timestamp)
                        .add(1, 'minute')
                        .unix()
                    if (!res.values.find((value) => value[0] === timestamp)) {
                        res.values.push([timestamp, '0'])
                    }
                }
                while (res.values.length < frames) {
                    const timestamp = moment
                        .unix(res.values[0][0])
                        .subtract(1, 'minute')
                        .unix()
                    if (!res.values.find((value) => value[0] === timestamp)) {
                        res.values.unshift([timestamp, '0'])
                    }
                    now = timestamp
                }
            })
        }
    } else {
        // always return at least empty values array
        result.push({
            metric: {},
            values: []
        })
    }
    return metrics
}
