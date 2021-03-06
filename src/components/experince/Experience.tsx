import styles from "./Experince.module.css";
import ReactPlayer from "react-player";
export default function experience() {
  return (
    <div>
      <h2 className="sectionHeader"> 👨‍💻 Work Experience </h2>
      <div className={styles.cardContainer}>
      <div className={styles.card}>
          <div>
            <img
              className={styles.companyLogo}
              src="https://media-exp1.licdn.com/dms/image/C4D0BAQHQ4AuFrmOQ1A/company-logo_200_200/0/1567611189744?e=1646265600&v=beta&t=eU9DRHi4btwR6sUXePhB0wLerjSFBBQswvwqm33RF60"
              alt="company name"
            />
          </div>
          <div className={styles.details}>
            <h3>Coachhub - the digital coaching platform</h3>
            <p>2021 June - Present</p>
            <p className={styles.description}>
            ✅  Contributed to backoffice application for managing coachee data and agreements.<br/>
            ✅  Developed integration for syncronizing coachee and organization data.<br/>
            ✅  Extensively developed automations for managing coachee status in the backend. <br/>
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div>
            <img
              className={styles.companyLogo}
              src="https://media-exp1.licdn.com/dms/image/C4D0BAQHymfxcVPKrhA/company-logo_200_200/0/1581940288258?e=1646265600&v=beta&t=VokvzGfiykmV9byqMJePE-BbvnjmqYEWAIg0xo33Mss"
              alt="company name"
            />
          </div>
          <div className={styles.details}>
            <h3>Immobilien Scout</h3>
            <p>2019 Sep - 2021 May</p>
            <p className={styles.description}>
              About the company: ImmobilienScout24 is a real estate portal with
              over 7 million visitors and 2 billion page views per month. The
              company, based in Berlin, offers more than 1.5 million different
              properties and employs more than 500 people About Current project
              Working on set of projects which helps boosting the agent profiles
              on immoscout website. Using Typescript, AWS lambda, serverless ,
              dynamodb , React for developing these apps.
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div>
            <img
              className={styles.companyLogo}
              src="https://media-exp1.licdn.com/dms/image/C4D0BAQF8xaq3CGDOWw/company-logo_200_200/0/1624621530961?e=1646265600&v=beta&t=pXwEO360FkwGLa72oSTCHkC-6Iaoo9emXPgbK4UnlaY"
              alt="company name"
            />
          </div>
          <div className={styles.details}>
            <h3>NT-ware Systemprogrammierungs-GmbH</h3>
            <p>2019 Sep - Present</p>
            <p className={styles.description}>
              ✅ Working on Uniflow online product used in various Canon
              printers.
            </p>
          </div>
        </div>
        <div className={styles.card}>
          <div>
            <img
              className={styles.companyLogo}
              src="https://media-exp1.licdn.com/dms/image/C4D0BAQGxONgAB9YmXg/company-logo_200_200/0/1519900952739?e=1646265600&v=beta&t=38Y8QaI1ZSLOH8DZ3zYUkxCdUx6DuJdf_YcUbHwyK_0"
              alt="company name"
            />
          </div>
          <div className={styles.details}>
            <h3>
              Robert Bosch Engineering and Business Solutions Private Limited
            </h3>
            <p>2013 Sep - 2019 Nov</p>
            <p>5 yrs 3 mos</p>
            <p className={styles.description}>
              ✅ Responsible for software development using Java ,J2EE,
              Springdata, Spring boot and Microservices. <br />
              ✅ Actively involved in customer requirement gathering. <br />
              ✅ One of the key developer of Active cockpit product.
              <br />
              ✅ Involved in technical decision making of various modules.
              <br />
            </p>
            <div className={styles.projectDemo}>
              <h3 className={styles.videoHeader}>Project Demo</h3>
              <div className={styles.videoList}>
                <div>
                  <ReactPlayer
                    width="350px"
                    height="200px"
                    playing
                    muted
                    url="https://www.youtube.com/watch?v=jK-foh1q8s0"
                  />
                  <span className={styles.videoCaption}>Deviation Manager</span>
                </div>
                <div>
                  <ReactPlayer
                    width="350px"
                    height="200px"
                    playing
                    muted
                    url="https://www.youtube.com/watch?v=PPdxGQQZF6U"
                  />
                  <span className={styles.videoCaption}>Activecockpit</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
