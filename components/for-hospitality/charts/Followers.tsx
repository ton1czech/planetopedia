import { useLanguage } from '@/store/useLanguage'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  GridLineOptions,
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const Followers = () => {
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
          'November',
          'December',
        ]
      : language === 'cs'
      ? [
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
          'Listopad',
          'Prosinec',
        ]
      : language === 'de'
      ? [
          'Januar',
          'Februar',
          'März',
          'April',
          'Mai',
          'Juni',
          'Juli',
          'August',
          'September',
          'Oktober',
          'November',
          'Dezember',
        ]
      : []

  const data = {
    labels,
    datasets: [
      {
        data: [0, 0, 0, 0, 0, null, null, null, null, null, null, null],
        borderColor: 'rgba(128, 128, 128, 0.7)',
        borderDash: [5, 5],
        label:
          language === 'en'
            ? 'Before collaboration'
            : language === 'cs'
            ? 'Před spoluprací'
            : language === 'de'
            ? 'Vor der Zusammenarbeit'
            : '',
      },
      {
        data: [
          null,
          null,
          null,
          null,
          0,
          72,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        borderColor: 'rgb(229, 169, 29)',
        label:
          language === 'en'
            ? 'The beginning of the collaboration'
            : language === 'cs'
            ? 'Začátek splupráce'
            : language === 'de'
            ? 'Der Beginn der Zusammenarbeit'
            : '',
      },
      {
        data: [
          null,
          null,
          null,
          null,
          null,
          72,
          212,
          504,
          756,
          963,
          1240,
          1460,
        ],
        borderColor: 'rgb(13, 229, 17)',
        label:
          language === 'en'
            ? 'The course of collaboration'
            : language === 'cs'
            ? 'Průběh spolupráce'
            : language === 'de'
            ? 'Der Verlauf der Zusammenarbeit'
            : '',
      },
    ],
  }

  const options: any = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
    },
    maintainAspectRatio: false,
    color: 'rgba(255,255,255,.7)',
    scales: {
      x: {
        grid: {
          color: 'rgba(255,255,255,.3)',
        },
        ticks: {
          color: 'rgba(255,255,255,.7)',
        },
      },
      y: {
        grid: {
          color: 'rgba(255,255,255,.3)',
        },
        ticks: {
          color: 'rgba(255,255,255,.7)',
        },
      },
    },
  }

  return (
    <div>
      <Line
        data={data}
        options={options}
        className='h-[400px] sm:h-[450px] md:h-[500px] w-full'
      />
    </div>
  )
}

export default Followers
