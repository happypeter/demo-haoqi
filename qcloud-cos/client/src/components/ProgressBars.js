import React from 'react'
import { Progress } from 'antd'

export default ({ progressBars }) => (
  <div>
    {
      progressBars.map(
        t => {
          return (
            <div key={t.uid}>
              {t.name}
              <Progress percent={t.percent} status={t.status} />
            </div>
          )
        }
      )
    }
  </div>
)
