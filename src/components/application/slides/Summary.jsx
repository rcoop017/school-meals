﻿import React, { Component, PropTypes, responsive, bordered } from 'react'
import Slide from '../Slide'
import SummaryLabel from './SummaryLabel'
import SummaryPersonCollection from './SummaryPersonCollection'
import Checkbox from '../Checkbox'
import Checkboxes from '../Checkboxes'
import { observer } from 'mobx-react'
import { numberFormat } from 'underscore.string'
import { assistanceProgramsVarArray, organization } from '../../../config'
import { fullName, toSentenceSerialArray } from '../../../helpers'
import { tooltiptext } from '../../Tooltiptext'
import Tooltip from '../Tooltip'
import {FormattedMessage} from 'react-intl'

@observer
class Summary extends Component {
  get isValid() {
    return this.props.applicationData.certifiedCorrect
  }

  render() {
    const { applicationData } = this.props
    const { adults,
            contact,
            otherChildren,
            students } = applicationData
    const assistancePrograms = applicationData.assistancePrograms.applicable

    // don't show link to Adults slide if we're not collecting household income
    const adultsId = applicationData.showHousehold && 'adults'

    const headerText =
      <FormattedMessage
          id="app.slides.summary.header"
          description="Text for the header of the slide."
          defaultMessage="Summary"
      />

    const nextText =
      <FormattedMessage
          id="app.slides.summary.nextText"
          description="Text on the button to submit final applicaiton."
          defaultMessage="Submit"
      />

    return (
      <Slide header={headerText}
             nextText={nextText}
             nextDisabled={!this.isValid}
             id="summary">
        <p className="usa-font-lead">
        <FormattedMessage
          id="app.slides.summary.finished"
          description="Awesome, you're finished!"
          defaultMessage="Awesome, you finished!"
        />
        </p>
        <p>
        <FormattedMessage
          id="app.slides.summary.summaryInfo"
          description="Summary Info is below"
          defaultMessage="Here is a summary of the information you provided in the application. We encourage you to save or print this screen for your records. If everything looks good, click the 'Submit' button at the bottom of the page."
        />
        </p>
        <div className="well">
          <SummaryPersonCollection collection={students} id="students">
          <FormattedMessage
            id="app.slides.summary.studentsAttending"
            description="student info"
            defaultMessage="Students attending {organizationName}"
            values={{
              organizationName: organization.name
            }}
          />
          </SummaryPersonCollection>

          <SummaryPersonCollection collection={otherChildren} id="other-children">
          <FormattedMessage
            id="app.slides.summary.otherChildren"
            description="Other children"
            defaultMessage="Other children"
          />
          </SummaryPersonCollection>

          <SummaryPersonCollection collection={adults} id={adultsId}>
          <FormattedMessage
            id="app.slides.summary.adults"
            description="Adults"
            defaultMessage="Adults"
          />
          </SummaryPersonCollection>

          <div>
            <SummaryLabel id="assistance-programs">
            <FormattedMessage
              id="app.slides.summary.caseNumbers"
              description="Assistance program case numbers"
              defaultMessage="Assistance program case numbers"
            />

            </SummaryLabel>

            <ul>
              {
                assistancePrograms.length ?
                assistancePrograms.map(program =>
                  <li key={program.id}>
                    {program.name} — <strong>{program.caseNumber}</strong>
                  </li>
                )
                :
                <li>
                  <FormattedMessage
                      id="app.slides.summary.noAssistancePrograms"
                      description="Placeholder indicating that no assistance programs have been selected."
                      defaultMessage="(none)"
                  />
                </li>
              }
            </ul>
          </div>

          {applicationData.showHousehold &&
           <div>
             <SummaryLabel>
             <FormattedMessage
                id="app.slides.summary.totalIncome"
                description="Total household income"
                defaultMessage="Total household income"
              />
              </SummaryLabel>
             <Tooltip text={tooltiptext.monthlyIncomeSum}>
               ${
                 numberFormat(
                   parseFloat(applicationData.totalMonthlyHouseholdIncome, 10),
                   2
                 )
                }
               {' '}
               <FormattedMessage
                id="app.slides.summary.perMonth"
                description=" per month"
                defaultMessage=" per month"
              />
             </Tooltip>
           </div>
          }

          <SummaryLabel id="contact">
          <FormattedMessage
                id="app.slides.summary.contactInfo"
                description="Contact information"
                defaultMessage="Contact information"
          />
              </SummaryLabel>
          <p>
            { fullName(applicationData.attestor) }
            {!!contact.address1 &&
             <span>
               <br />
               { contact.address1 }
             </span>
            }
            {!!contact.address2 &&
             <span>
               <br />
               { contact.address2 }
             </span>
            }
            {!!contact.city &&
             <span>
               <br />
               { contact.city },{' '}
             </span>
            }
            { contact.state }
            {' '}
            { contact.zip }
            {!!contact.phone &&
             <span>
               <br />
               { contact.phone }
             </span>
            }
            {!!contact.email &&
             <span>
               <br />
               { contact.email }
             </span>
            }
          </p>
        </div>

        <Checkboxes legend="Certification">
          <Checkbox name="certifiedCorrect" object={applicationData}>
            { applicationData.showHousehold ?
              <strong>
              <FormattedMessage
                id="app.slides.summary.certification"
                description="Certification statement"
                defaultMessage="I certify* that {totalHouseholdMembers} are in my household and that our household income is about {totalHouseholdIncome}"
                values={{
                totalHouseholdMembers: <span className="usa-label-big">
                  {applicationData.totalHouseholdMembers}&nbsp;
                  <FormattedMessage
                    id="app.slides.summary.people"
                    description="people"
                    defaultMessage=" people"
                  />
                </span>,
                totalHouseholdIncome: <span className="usa-label-big">
                  ${numberFormat(applicationData.totalMonthlyHouseholdIncome)}
                  {' '}
                  <FormattedMessage
                    id="app.slides.summary.perMonth"
                    description="per month"
                    defaultMessage=" per month"
                  />
                </span>
                }}
                />
              </strong>
              : (assistancePrograms.length ?
                 <strong>
                 <FormattedMessage
                    id="app.slides.summary.certificationPrograms"
                    description="Certification statement for programs"
                    defaultMessage="I certify* that my household participates in {program}"
                    values={{
                    program: toSentenceSerialArray(assistancePrograms.map(program => {
                      return (
                        <span className="usa-label-big" key={program.id}>
                          {program.accronym}
                        </span>
                      )
                        }))
                    }}
                />
                 </strong>
                 :
                 <strong>
                 <FormattedMessage
                    id="app.slides.summary.infoCorrect"
                    description="acknowledge info is correct"
                    defaultMessage="I certify* that the information on this page is correct to the best of my knowledge."
                 />
                 </strong>
              )
            }
          </Checkbox>
        </Checkboxes>
        <p><small><em>
        <FormattedMessage
          id="app.slides.summary.finePrint"
          description="fine print, if info is wrong, it is fraud."
          defaultMessage="*I understand that this information is given in connection with the receipt of Federal funds, and that school officials may verify (check) the information. I am aware that if I purposely give false information, my children may lose meal benefits. Deliberate misrepresentation of information may subject applicants to prosecution under applicable State and Federal law."
        />
        </em></small></p>
      </Slide>
    )
  }
}

Summary.propTypes = {
  applicationData: PropTypes.object.isRequired
}

export default Summary
