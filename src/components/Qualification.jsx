import { BusinessCenterOutlined, EventNote, School } from '@material-ui/icons'
import { getDuration } from '../utilFunction'
import { qualifications } from '../data'

const Qualification = () => {
  const formatDate=(date)=>{
    return date.substring(0,2)+"-"+date.substring(6,date.length)
  }
    return (
        <section className="qualification section" id="qualification">
          <input
            type="radio"
            onChange={(e) => e.target.value}
            name="quali"
            hidden
            id="education" checked />
          <input
            type="radio"
            onChange={(e) => e.target.value}
            name="quali"
            hidden
            id="work" />
          <h2 className="section__title cap">Qualification</h2>
          <span className="section__subtitle cap">my personel journery</span>
          <div className="quali__container container grid">
            <div className="quali__tabs">
              <label htmlFor='education' className="quali__button education button--flex">
                <School className='quali__icon' />
                Education
              </label>
              <label htmlFor='work' className="quali__button work button--flex">
                <BusinessCenterOutlined className='quali__icon' />
                Work
              </label>
              <div className="quali__layer"></div>
            </div>
            <div className="quali__sections">
              {/* quali content 1 */}
              <div className="quali__content education">
                {/* quali 1 */}
                <div className="quali__data">
                  <div>
                    <div className="quali__title cap">MERN stack developer</div>
                    <span className="quali__subtitle cap">self-study</span>
                    <div className="quali__calender">
                      <EventNote className="calender_icon" />
                      2021 - Till Now
                    </div>
                  </div>
                  <div>
                    <span className="quali__rounder"></span>
                    <span className="quali__line"></span>
                  </div>
                </div>
                {/* !quali 1 */}
                {/* quali 2 */}
                <div className="quali__data">
                  <div></div>
                  <div>
                    <span className="quali__rounder"></span>
                    <span className="quali__line"></span>
                  </div>
                  <div>
                    <div className="quali__title cap">Web Design</div>
                    <span className="quali__subtitle cap">self-study</span>
                    <div className="quali__calender">
                      <EventNote className="calender_icon" />
                      2019 - Till Now
                    </div>
                  </div>
                </div>
                {/* !quali 2 */}
                {/* quali 3 */}
                <div className="quali__data">
    
                  <div>
                    <div className="quali__title cap">Software Enginner</div>
                    <span className="quali__subtitle cap">errachidia - FST</span>
                    <div className="quali__calender">
                      <EventNote className="calender_icon" />
                      2019 - 2020
                    </div>
                  </div>
                  <div>
                    <span className="quali__rounder"></span>
                  </div>
                </div>
                {/* !quali 3 */}
                
              </div>
              {/* !quali content 1 */}
              {/* quali content 2 */}
              <div className="quali__content work" >
                {
                  qualifications.map((item,i)=>(
                    <div key={i} className="quali__data">
                      {(i%2!==0) && <div></div>}
                      {(i%2!==0) && <div>
                    <span className="quali__rounder"></span>
                    {i!==qualifications.length-1 && <span className="quali__line"></span>}
                  </div>}
                   <div>
                    <div className="quali__title cap">{item.jobTitle}</div>
                    <span className="quali__subtitle cap">{item.company}  {item.city && "- "+ item.city}</span>
                    <div className="quali__calender">
                      <EventNote className="calender_icon" />
                      {formatDate(item.startDate) +" - "+(item.endDate ? formatDate(item.endDate) : "till Now")} ({getDuration(new Date(item.startDate), new Date(item.endDate ? item.endDate : new Date()))})
                    </div>
                  </div>
                  {(i%2===0 ) && <div>
                    <span className="quali__rounder"></span>
                    { <span className="quali__line"></span>}
                  </div>}
                </div>
                  ))
                }
              </div>
              {/* !quali content 2 */}
            </div>
    
    
    
          </div>
        </section>
      )
}

export default Qualification