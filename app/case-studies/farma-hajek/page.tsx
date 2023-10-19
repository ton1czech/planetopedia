import Hero from '@/components/case-studies/Hero'
import Results from '@/components/case-studies/Results'
import What from '@/components/case-studies/What'
import Who from '@/components/case-studies/Who'
import SocialMedia from '@/components/case-studies/farma-hajek/SocialMedia'

export default function FarmaHajek() {
  return (
    <div className='pt-24 pb-20 bg-white md:pb-32 md:pt-32'>
      <Hero
        img='/case-studies/farma-hajek/thumbnail.webp'
        servicesEn={[
          'marketing',
          'events - strongman',
          'web development',
          'social media management & content creation',
        ]}
        servicesCz={[
          'marketing',
          'akce - strongman',
          'tvorba webu',
          'správa a tvorba obsahu pro sociální sítě',
        ]}
        title='Farma Hájek'
      />
      <Who>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo quis odit
        porro quod amet quae eum minima itaque, nisi est quam debitis, dolores
        quibusdam dolorum neque iure, inventore ab velit in laborum. Voluptatum,
        maxime odio! Sint tempora repudiandae accusantium nobis, pariatur
        aspernatur porro ab numquam adipisci dignissimos. Harum animi fugit
        eaque numquam, error autem deserunt sint sit dolorem laboriosam suscipit
        recusandae. Distinctio, nesciunt maiores? Itaque voluptas, vero quisquam
        nisi omnis nobis deleniti illo, odit laudantium aliquid ex explicabo
        facere! Blanditiis tempora officia libero doloremque nesciunt voluptas
        est qui ut dolore! Sunt itaque, mollitia illo qui impedit laborum
        nesciunt nostrum consequuntur.
      </Who>
      <What>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Necessitatibus
        corrupti beatae nulla. Inventore, reprehenderit iste dolores eaque in ea
        minima, ex similique dicta, dolore cupiditate ipsam sed consequuntur
        itaque. Quos ducimus expedita, porro odio ut, est sint modi nobis fugiat
        suscipit excepturi vel facere. Quasi ex unde ad. Qui est, dolorum
        nostrum perferendis explicabo incidunt sit rerum doloribus adipisci
        saepe quod velit fuga architecto fugiat sequi facilis aut totam debitis,
        aperiam dolor. Omnis sit hic voluptatibus in ipsa ipsam ea
        necessitatibus fuga repellendus rem sunt, earum, eligendi delectus! Est
        pariatur nemo impedit laborum ut tempora minima at iste quisquam
        dignissimos.
      </What>
      <Results>
        <SocialMedia />
      </Results>
    </div>
  )
}
