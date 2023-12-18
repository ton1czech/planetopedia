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

const Imprese = () => {
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
        ]
      : []

  const data = {
    labels,
    datasets: [
      {
        data: [0, 0, 0, 0, 0, null, null, null, null, null, null],
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
        data: [null, null, null, null, 0, 25403, null, null, null, null, null],
        borderColor: 'rgb(229, 169, 29)',
        label:
          language === 'en'
            ? 'The beginning of the collaboration'
            : language === 'cs'
            ? 'Začátek spolupráce'
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
          25403,
          87592,
          76325,
          71924,
          82573,
          83843,
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
  }

  return (
    <div>
      <Line
        data={data}
        options={options}
        className='h-[300px] sm:h-[400px] md:h-[500px] w-full'
      />
    </div>
  )
}

export default Imprese
