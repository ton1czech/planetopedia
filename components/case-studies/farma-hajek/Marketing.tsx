'use client'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { useLanguage } from '@/store/useLanguage'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const Marketing = () => {
  const { language } = useLanguage(state => state)

  const labels =
    language === 'en'
      ? [
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
        ]
      : [
          'Leden',
          'Únor',
          'Březen',
          'Duben',
          'Květen',
          'Červen',
          'Červenec',
          'Srpen',
          'Září',
          'Říjen',
        ]

  const data = {
    labels,
    datasets: [
      {
        data: [19, 20, 20, 21, 20, 21, null, null, null, null],
        borderColor: 'rgba(128, 128, 128, 0.7)',
        borderDash: [5, 5],
        label: 'Před naším zásahem',
      },
      {
        data: [null, null, null, null, null, 21, 34, 66, 121, 240],
        borderColor: 'rgb(24, 198, 221)',
        label: 'Po našem zásahu',
      },
    ],
  }

  const options: any = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Instagram Followers',
      },
    },
  }

  return (
    <div>
      <h2 className='text-lg md:text-xl'>
        {language === 'en' && <>~ Marketing Results</>}
        {language === 'cs' && <>~ Marketingové Výsledky</>}
      </h2>

      <Line data={data} options={options} />
    </div>
  )
}

export default Marketing
