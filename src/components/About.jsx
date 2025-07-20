/**
 * @copyright 2025 Karim Nassif
 * @license Apache-2.0
 */


const aboutItems = [
  {
    label: 'Project(s) done',
    number: 7
  },
  {
    label: 'Years of experience',
    number: 1
  }
];

const About = () => {
  return (
    <section
      id="about"
      className="section"
    >

      <div className="container">

        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12">
          <p className="text-zinc-300 mb-4 md:mb-8 mg:text-xl md:max-w-[60ch]">
            Welcome! I&apos;m Karim, a recent graduate software engineer with a knack for crafting visually stunning and highly functional websites. Combining creativity and technical expertise. I love to learn, develop and gain new skills while conquering new challenges.
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {
              aboutItems.map(({ label, number }, key) => (
                <div key={key}>
                  <div className="flex items-center md:mb-2">
                    <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                    <span className="text-sky-400 font-semibold md:text-3xl">+</span>
                  </div>

                  <p className="text-sm text-zinc-400">{label}</p>
                </div>
              ))
            }

            <img
            src="/images/Karim-Nassif-Logo.png" 
            alt="Logo"
            width={30}
            height={30}
            className="ml-auto md:w-[40px] md:h-[40px]"
             />
          </div>
        </div>

      </div>
    </section>
  )
}

export default About