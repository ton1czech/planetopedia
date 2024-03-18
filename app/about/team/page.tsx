// 'use client'

// import Container from '@/components/Container'
// import Member from '@/components/team/Member'
// import { useLanguage } from '@/store/useLanguage'
// import { Instagram, Link, Linkedin } from 'lucide-react'

// export default function Team() {
//   const { language } = useLanguage(state => state)

//   return (
//     <div className='bg-white'>
//       <Container className='grid gap-20 pt-24 pb-20 md:pt-32 md:pb-32 md:grid-cols-2 xl:grid-cols-3 md:gap-16'>
//         <Member
//           src='/team/dominik-grossl.webp'
//           name='Dominik Grössl'
//           role={
//             language === 'en'
//               ? 'Founder'
//               : language === 'cs'
//               ? 'Zakladatel'
//               : language === 'de'
//               ? 'Gründer'
//               : ''
//           }
//           body={
//             language === 'en'
//               ? 'Dominik is the founder of digital marketing agency Planetopedia with a focus on digital marketing and content creation. He is a multi-faceted, highly motivated digital marketer, networker and community builder. In recent years, he has had the opportunity to work with many content creators and collaborate with numerous companies and luxury hotels around the world such as Four Seasons, Ritz-Carlton, Six Senses and more. He not only managed to turn his travel dreams into reality, but also successfully entered the tourism industry through social media and created highly effective campaigns. Now with all these services he is able to inspire and build an audience to provide value to others.'
//               : language === 'cs'
//               ? 'Dominik je zakladatelem digitální marketingové agentury Planetopedia se zaměřením na digitální marketing a tvorbu obsahu. Je všestranný, vysoce motivovaný digitální marketér, networker a budovatel komunit. V posledních letech měl příležitost pracovat s mnoha jednotlivci a spolupracovat s mnoha firmami a luxusními hotely po celém světě, jako jsou Four Seasons, Ritz-Carlton, Six Senses a další. Podařilo se mu nejen proměnit své sny o cestování ve skutečnost, ale také úspěšně vstoupit do cestovního ruchu skrz sociální média a vytvářet vysoce efektivní kampaně. Nyní je díky všem těmto službám schopen inspirovat a budovat publikum, aby mohl poskytovat hodnotu ostatním.'
//               : language === 'de'
//               ? 'Dominik ist der Gründer der Digital Marketing Influencer Agency Planetopedia mit dem Schwerpunkt auf digitalem Marketing, Content Creation und der Zusammenarbeit mit Luxusmarken. Er ist ein vielseitiger, hoch motivierter digitaler Marketeer, Netzwerker und Community Builder. In den letzten Jahren hatte er das Glück, mit vielen Content-Erstellern und Luxushotels auf der ganzen Welt wie Four Seasons, Ritz-Carlton, Jumeirah und anderen zusammenzuarbeiten. Er konnte nicht nur seinen Traum vom Reisen verwirklichen, sondern auch erfolgreich in die Reisebranche einsteigen, indem er soziale Medien nutzte und hocheffektive Kampagnen erstellte. Durch all diese Dienstleistungen ist er nun in der Lage, ein Publikum zu inspirieren und aufzubauen, um anderen einen Mehrwert zu bieten.'
//               : ''
//           }
//           links={[
//             {
//               icon: Instagram,
//               href: 'https://www.instagram.com/dominik_grossl',
//             },
//             {
//               icon: Linkedin,
//               href: 'https://www.linkedin.com/in/dominik-gr%C3%B6ssl/',
//             },
//           ]}
//         />
//         <Member
//           src='/team/fabian-dagostin.webp'
//           name='Fabian Dagostin'
//           role={
//             language === 'en'
//               ? 'Strategy & Technology'
//               : language === 'cs'
//               ? 'Strategie a Technologie'
//               : language === 'de'
//               ? 'Strategie und Technologie'
//               : ''
//           }
//           body={
//             language === 'en'
//               ? "Fabian Dagostin is a technology entrepreneur and product & marketing expert. He is the CEO & Co-Founder of Raush, the first travel booking system for Social Media that helps travel influencers & brands monetize their travel content. Prior, Fabian founded & scaled Street Life, a digital tour-guide application named by media outlets as the 'Tiktok for travel'. Previously he exited Street Inc, a virality marketing agency servicing the likes of Gucci, Bacardi, Red Bull, (Careem) (and many more/as well as governmental institutions). His products & content can be enjoyed on OSN and Wavo TV networks, Google Arts & Culture and every Emirates Airlines flight. His stories have been broadcasted globally on CNN TV, newspapers like The National, Radio 103.8 and other noteworthy mediums."
//               : language === 'cs'
//               ? 'Fabian Dagostin je technologický podnikatel a odborník na produkty a marketing. Je generálním ředitelem a spoluzakladatelem společnosti Raush, prvního cestovního rezervačního systému pro sociální média, který pomáhá cestovním influencerům a značkám zpeněžit jejich cestovní obsah. Předtím Fabian založil a rozšířil Street Life, digitální průvodcovskou aplikaci, kterou média označila za "Tiktok pro cestování". Předtím opustil Street Inc, agenturu pro virální marketing, která poskytovala služby například společnostem Gucci, Bacardi, Red Bull, (Careem) (a mnoha dalším / stejně jako vládním institucím). Jeho produkty a obsah si můžete vychutnat na televizních sítích OSN a Wavo, Google Arts & Culture a v každém letu Emirates Airlines. Jeho příběhy byly celosvětově vysílány v televizi CNN, novinách jako The National, rádiu 103,8 a dalších pozoruhodných médiích.'
//               : language === 'de'
//               ? 'Fabian Dagostin ist ein Technologieunternehmer und Produkt und Marketingexperte. Er ist CEO und Mitbegründer von Raush, dem ersten Reisebuchungssystem für soziale Medien, das Reise-Influencern und Marken hilft, ihre Reiseinhalte zu monetarisieren. Zuvor gründete Fabian Street Life, eine digitale Reiseführer-Applikation, die von den Medien als "Tiktok für Reisen" bezeichnet wurde, und baute es aus. Zuvor verließ er Street Inc, eine Agentur für virales Marketing, die für Unternehmen wie Gucci, Bacardi, Red Bull, (Careem) (und viele mehr/ sowie für staatliche Institutionen) tätig war. Seine Produkte und Inhalte sind auf den Fernsehsendern OSN und Wavo TV, Google Arts & Culture und auf jedem Flug der Emirates Airlines zu sehen. Seine Geschichten wurden weltweit auf CNN TV, in Zeitungen wie The National, Radio 103.8 und anderen bemerkenswerten Medien ausgestrahlt.'
//               : ''
//           }
//           links={[
//             {
//               icon: Instagram,
//               href: 'https://www.instagram.com/fabiandagostin/',
//             },
//             {
//               icon: Linkedin,
//               href: 'https://www.linkedin.com/in/fabiandagostin/',
//             },
//           ]}
//         />
//         <Member
//           src='/team/daniel-anthony-baudys.webp'
//           name='Daniel Anthony Baudyš'
//           role={
//             language === 'en'
//               ? 'Web Development'
//               : language === 'cs'
//               ? 'Tvorba Webu'
//               : language === 'de'
//               ? 'Web-Entwicklung'
//               : ''
//           }
//           body={
//             language === 'en'
//               ? 'Daniel Anthony Baudyš specializes in design and programming. He has been working in design and photography since 2015 and programming since 2019. During this time he has created dozens of projects, both for himself and for clients. His portfolio includes graphic design of inflation in the Czech Republic, several projects for the Pilsen office. The website you are reading right now is also his creation. He has also given several educational talks for children, mainly in Minecraft. Currently, his main focus is creating websites using the latest technologies, of which he is developing his knowledge every day. It is also important to mention that he successfully passed the Microsoft Office Specialist exams in PowerPoint and Word at the Bett 2023 event in London.'
//               : language === 'cs'
//               ? 'Daniel Anthony Baudyš se specializuje v oblasti designu a programování. Designu a fotografování se věnuje již od roku 2015, programování následně od roku 2019. Za tuto dobu stihl vytvořit desítky projektů, ať už sám pro sebe, tak i pro klienty. Jeho portfolia zahrnuje grafické zpracování inflace v České republice, několik projektů pro úřad Plzeňského kraje. Web, který právě čtete je také jeho výtvor. Také vedl několik výukových přednášek pro děti, především v Minecraftu. V současné době je jeho hlavním zaměřením tvorba webových stránek pomocí nejnovějších technologií, o kterých svou znalost rozvíjí každý den. Důležité je také zmínit, že úspěšně absolvoval Microsoft Office Specialist zkoušky z PowerPointu a Wordu na akci Bett 2023 v Londýně.'
//               : language === 'de'
//               ? 'Daniel Anthony Baudyš hat sich auf Design und Programmierung spezialisiert. Er arbeitet seit 2015 im Bereich Design und Fotografie und seit 2019 im Bereich Programmierung. In dieser Zeit hat er Dutzende von Projekten sowohl für sich selbst als auch für Kunden realisiert. Sein Portfolio umfasst Grafikdesign für die Inflation in der Tschechischen Republik, mehrere Projekte für das Büro in Pilsen. Auch die Website, die Sie gerade lesen, ist mein Werk. Er hat auch mehrere pädagogische Vorträge für Kinder gehalten, hauptsächlich in Minecraft. Gegenwärtig konzentriert er sich vor allem auf die Erstellung von Websites unter Verwendung der neuesten Technologien, deren Kenntnisse er jeden Tag erweitert. Es ist auch wichtig zu erwähnen, dass er die Prüfungen zum Microsoft Office Specialist in PowerPoint und Word auf der Veranstaltung Bett 2023 in London erfolgreich bestanden hat.'
//               : ''
//           }
//           links={[
//             {
//               icon: Instagram,
//               href: 'https://www.instagram.com/ton1czech/',
//             },
//             {
//               icon: Linkedin,
//               href: 'https://www.linkedin.com/in/ton1czech/',
//             },
//           ]}
//         />
//         <Member
//           src='/team/felipe-prieto.webp'
//           name='Felipe Prieto'
//           role={
//             language === 'en'
//               ? 'Community Manager'
//               : language === 'cs'
//               ? 'Manažer Komunity'
//               : language === 'de'
//               ? 'Community Manager'
//               : ''
//           }
//           body={
//             language === 'en'
//               ? "I am Felipe Prieto, photographer and filmmaker based out in Philadelphia, PA. I am a travel enthusiast, who enjoys learn about new cultures and experiencing the world as it is. Traveling for work and for pleasure has broadened my perspective on life, and given me the opportunity to capture images that tell interesting stories. Whether it's the tall skyscrapers of New York City, the serene landscapes of Okinawa, or the vibrant colors of the colonial streets of Cartagena. Through the 8 years of my career I have worked with multiple brands and companies like; RedBull, JanSport, Hisea Outdoor Boots, MTV, Tamron Lenses and much more. I am grateful for everything that photography has brought into my life so far, and I can't wait to see where this passion takes me next. Photography will always be a big part of my life, and I hope to continue exploring the world, capturing its essence through my lens."
//               : language === 'cs'
//               ? 'Jsem Felipe Prieto, fotograf a filmař z Filadelfie. Jsem nadšenec do cestování, který rád poznává nové kultury a zažívá svět takový, jaký je. Cestování za prací i zábavou mi rozšířilo pohled na život a dalo mi příležitost zachytit snímky, které vyprávějí zajímavé příběhy. Ať už jsou to vysoké mrakodrapy New Yorku, klidná krajina Okinawy nebo zářivé barvy koloniálních ulic Cartageny. Za 8 let své kariéry jsem spolupracoval s mnoha značkami a společnostmi, jako jsou: RedBull, JanSport, Hisea Outdoor Boots, MTV, Tamron Lenses a mnoho dalších. Jsem vděčný za vše, co mi fotografování doposud přineslo do života, a nemohu se dočkat, kam mě tato vášeň zavede dál. Fotografie bude vždy velkou součástí mého života a doufám, že budu i nadále objevovat svět a zachycovat jeho podstatu prostřednictvím svého objektivu.'
//               : language === 'de'
//               ? 'Ich bin Felipe Prieto, Fotograf und Filmemacher aus Philadelphia, PA. Ich bin ein Reiseliebhaber, der es genießt, neue Kulturen kennenzulernen und die Welt so zu erleben, wie sie ist. Reisen, sowohl beruflich als auch privat, haben meinen Blick auf das Leben erweitert und mir die Möglichkeit gegeben, Bilder einzufangen, die interessante Geschichten erzählen. Ob es nun die hohen Wolkenkratzer von New York City, die ruhigen Landschaften von Okinawa oder die leuchtenden Farben der kolonialen Straßen von Cartagena sind. In den 8 Jahren meiner Karriere habe ich mit zahlreichen Marken und Unternehmen zusammengearbeitet, darunter RedBull, JanSport, Hisea Outdoor Boots, MTV, Tamron Lenses und viele mehr. Ich bin dankbar für alles, was die Fotografie bisher in mein Leben gebracht hat, und ich kann es kaum erwarten zu sehen, wohin mich diese Leidenschaft als nächstes führt. Die Fotografie wird immer ein großer Teil meines Lebens sein, und ich hoffe, dass ich weiterhin die Welt erkunden und ihre Essenz durch meine Linse einfangen kann.'
//               : ''
//           }
//           links={[
//             {
//               icon: Instagram,
//               href: 'https://www.instagram.com/felipepprieto',
//             },
//             {
//               icon: Link,
//               href: 'https://www.felipeprietofineart.com/',
//             },
//           ]}
//         />
//         <Member
//           src='/team/francesco-de-franco.webp'
//           name='Francesco De Franco'
//           role={
//             language === 'en'
//               ? 'Community Manager'
//               : language === 'cs'
//               ? 'Manažer Komunity'
//               : language === 'de'
//               ? 'Community Manager'
//               : ''
//           }
//           body={
//             language === 'en'
//               ? "My name is Francesco, I am a photographer and drone pilot. I collaborate with some companies for product photography and some events. I am a lover of the Nordic countries and I only feel alive when I walk in nature. If you want to go trekking in Iceland I'm up for it!"
//               : language === 'cs'
//               ? 'Jmenuji se Francesco, jsem fotograf a pilot dronu. Spolupracuji s některými společnostmi na produktových fotografiích a některých akcích. Jsem milovníkem severských zemí a cítím se živý, jen když se procházím přírodou. Pokud chcete vyrazit na trek na Island, jsem pro!'
//               : language === 'de'
//               ? 'Mein Name ist Francesco, ich bin Fotograf und Drohnenpilot. Ich arbeite mit einigen Unternehmen für Produktfotografie und einige Veranstaltungen zusammen. Ich bin ein Liebhaber der nordischen Länder und fühle mich nur lebendig, wenn ich in der Natur unterwegs bin. Wenn du in Island wandern gehen willst, bin ich dabei!'
//               : ''
//           }
//           links={[
//             {
//               icon: Instagram,
//               href: 'https://www.instagram.com/ergodyne/',
//             },
//           ]}
//         />
//         <Member
//           src='/team/drew-peden.webp'
//           name='Drew Peden'
//           role={
//             language === 'en'
//               ? 'Community Manager'
//               : language === 'cs'
//               ? 'Manažer Komunity'
//               : language === 'de'
//               ? 'Community Manager'
//               : ''
//           }
//           body={
//             language === 'en'
//               ? "I'm Drew Peden, a Content Creator based in South Carolina! I’ve been a creator since 2016 and continue to grow my skills for this passion every single day! Currently I am working as a full time Content Creator for a marketing agency in Greenville, South Carolina while still pursuing freelance travel photography gigs on the side! My biggest passions are landscape / adventure lifestyle photography, because I love to take people on all of my crazy adventures! I hope to continue to grow and inspire others to follow their passions and explore this beautiful planet we call home!"
//               : language === 'cs'
//               ? 'Jsem Drew Peden, tvůrce obsahu z Jižní Karolíny! Tvůrcem jsem od roku 2016 a své dovednosti pro tuto vášeň rozvíjím každý den! V současné době pracuji na plný úvazek jako Content Creator pro marketingovou agenturu v Greenville v Jižní Karolíně a zároveň se stále věnuji cestovatelské fotografii na volné noze! Mou největší vášní je fotografování krajiny / dobrodružného životního stylu, protože miluji brát lidi na všechna svá bláznivá dobrodružství! Doufám, že se budu i nadále rozvíjet a inspirovat ostatní, aby následovali své vášně a prozkoumali tuto krásnou planetu, kterou nazýváme domovem!'
//               : language === 'de'
//               ? 'Ich bin Drew Peden, ein Content Creator mit Sitz in South Carolina! Ich bin seit 2016 Content Creator und entwickle meine Fähigkeiten für diese Leidenschaft jeden Tag weiter! Derzeit arbeite ich Vollzeit als Content Creator für eine Marketing-Agentur in Greenville, South Carolina, während ich nebenbei noch freiberuflich Reisefotografie betreibe! Meine größte Leidenschaft ist die Landschafts-/Abenteuer-Lifestyle-Fotografie, denn ich liebe es, Menschen auf all meine verrückten Abenteuer mitzunehmen! Ich hoffe, dass ich weiter wachsen und andere dazu inspirieren kann, ihren Leidenschaften zu folgen und diesen wunderschönen Planeten, den wir unser Zuhause nennen, zu erkunden!'
//               : ''
//           }
//           links={[
//             {
//               icon: Instagram,
//               href: 'https://www.instagram.com/drewpeden/',
//             },
//             {
//               icon: Linkedin,
//               href: 'https://www.linkedin.com/in/drew-peden-438a62172/',
//             },
//           ]}
//         />
//         <Member
//           src='/team/kacka-kutalkova.webp'
//           name='Kačka Kutálková'
//           role={
//             language === 'en'
//               ? 'Content Creation'
//               : language === 'cs'
//               ? 'Tvorba Obsahu'
//               : language === 'de'
//               ? 'Erstellung von Inhalten'
//               : ''
//           }
//           body={
//             language === 'en'
//               ? "I'm Kate, a young and ambitious social media manager. I love content creation and engaging with clients. It excites me to discover the thoughts and goals of our clients. Every day, I strive to create content and strategies that resonate with their target audience. My creativity and adaptability are valuable assets in the rapidly changing world of social media."
//               : language === 'cs'
//               ? 'Jsem Kačka, mladá a ambiciozní social media manažerka. Miluji tvorbu obsahu a komunikaci s klienty. Baví mě zjišťovat, jaké mají naši klienti myšlenky a cíle. Každý den se snažím vytvořit obsah a strategie, které osloví jejich cílovou skupinu. Moje kreativita a schopnost adaptace mi pomáhají v rychle se měnícím světě sociálních médií.'
//               : language === 'de'
//               ? 'Ich bin Kate, eine junge und ehrgeizige Social Media Managerin. Ich liebe es, Inhalte zu erstellen und mit Kunden in Kontakt zu treten. Es reizt mich, die Gedanken und Ziele unserer Kunden zu entdecken. Jeden Tag bemühe ich mich um die Erstellung von Inhalten und Strategien, die bei den Zielgruppen ankommen. Meine Kreativität und Anpassungsfähigkeit sind in der sich schnell verändernden Welt der sozialen Medien ein wertvolles Kapital.'
//               : ''
//           }
//           links={[
//             {
//               icon: Instagram,
//               href: 'https://www.instagram.com/ton1czech/',
//             },
//           ]}
//         />
//         <Member
//           src='/team/hanka-kostolanska.webp'
//           name='Hana Kostolanská'
//           role={
//             language === 'en'
//               ? 'Content Creation'
//               : language === 'cs'
//               ? 'Tvorba Obsahu'
//               : language === 'de'
//               ? 'Erstellung von Inhalten'
//               : ''
//           }
//           body={
//             language === 'en'
//               ? "Hana's work involves taking care of social media. Her ability is to be creative and quickly adapt to new trends. She has a great passion for content creation and interacting with clients. What truly excites her is discovering the ideas and goals of our clients and presenting them to the target audience effectively."
//               : language === 'cs'
//               ? 'Práce Hany spočívá v tom, že se stará o sociální média. Její schopností je být kreativní a rychle se přizpůsobit novým trendům. Má velkou vášeň pro tvorbu obsahu a interakci s klienty. Co ji opravdu nadchne, je objevovat myšlenky a cíle našich klientů a odprezentovat je co nejlépe cílové skupině.'
//               : language === 'de'
//               ? 'Ich bin Hana, und mein Job dreht sich um soziale Medien. Ich habe die Fähigkeit, kreativ zu sein und mich schnell an neue Trends anzupassen. Ich habe eine große Leidenschaft für die Erstellung von Inhalten und die Interaktion mit Kunden. Was mich wirklich begeistert, ist, die Gedanken und Ziele unserer Kunden zu entdecken.'
//               : ''
//           }
//           links={[
//             {
//               icon: Instagram,
//               href: 'https://www.instagram.com/hanna_kaa_/',
//             },
//           ]}
//         />
//         <Member
//           src='/team/jan-tulis.webp'
//           name='Jan Tulis'
//           role={
//             language === 'en'
//               ? 'Outreach Specialist'
//               : language === 'cs'
//               ? 'Specialista pro práci s veřejností'
//               : language === 'de'
//               ? 'Spezialist für Öffentlichkeitsarbeit'
//               : ''
//           }
//           body={
//             language === 'en'
//               ? "I'm Jan, and my job involves sending emails to potential clients. I offer you our services, which you might not even know you need until you receive our email. My communication skills are crucial for the success of our team."
//               : language === 'cs'
//               ? 'Jsem Jan, a moje práce spočívá v posílání e-mailů potenciálním klientům. Nabízím Vám naše služby, které možná ani nevíte, že potřebujete, dokud Vám nepřijde náš e-mail. Moje komunikativní dovednosti jsou klíčové pro úspěch našeho týmu.'
//               : language === 'de'
//               ? 'Ich bin Jan, und meine Aufgabe ist es, E-Mails an potenzielle Kunden zu schicken. Ich biete ihnen unsere Dienstleistungen an, von denen sie vielleicht gar nicht wissen, dass sie sie brauchen, bis sie unsere E-Mail erhalten. Meine Kommunikationsfähigkeiten sind entscheidend für den Erfolg unseres Teams.'
//               : ''
//           }
//           links={[
//             {
//               icon: Instagram,
//               href: 'https://www.instagram.com/hanna_kaa_/',
//             },
//           ]}
//         />
//       </Container>
//     </div>
//   )
// }
