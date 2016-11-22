import React, { Component, PropTypes } from 'react'
import BooleanRadio from '../BooleanRadio'
import Checkbox from '../Checkbox'
import Checkboxes from '../Checkboxes'
import { observer } from 'mobx-react'
import { informalName } from '../../../helpers'
import {FormattedMessage} from 'react-intl'

@observer
class OtherProgramsProgram extends Component {
  constructor (props) {
    super(props)
    this.onIsApplicableChange = this.onIsApplicableChange.bind(this)
  }

  onIsApplicableChange(attrName, value) {
    const students = this.props.students

    this.props.applicability[attrName] = value

    if (!value) {
      for (let i = 0; i < students.length; i++) {
        students[i][attrName] = false
      }
    }
  }

  render() {
    const { applicability, attribute, label, note, students } = this.props

    return (
      <div>
        <label>
          {label}
          {note && <small><br />{note}</small>}
        </label>

        {students.length === 1 ?
         <BooleanRadio object={students[0]} name={attribute} />
         :
         <div>
           <BooleanRadio object={applicability} name={attribute}
                         onChange={this.onIsApplicableChange} />
           {applicability[attribute] &&
            <Checkboxes legend="Students">
              <label>
              <FormattedMessage
                          id="app.slides.otherProgramsProgram.whichStudents"
                          description="Which students?"
                          defaultMessage="Which students?"
              />
              </label>
              {
                students.map(student =>
                  <Checkbox object={student} name={attribute} key={student.id}>
                    {informalName(student)}
                  </Checkbox>
                )
              }
            </Checkboxes>
           }
         </div>
        }
      </div>
    )
  }
}

OtherProgramsProgram.propTypes = {
  allPeopleCollections: PropTypes.array.isRequired,
  applicability: PropTypes.object.isRequired,
  attribute: PropTypes.string.isRequired,
  label: PropTypes.node.isRequired,
  note: PropTypes.node,
  students: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.arrayOf(PropTypes.object)
  ]).isRequired
}

export default OtherProgramsProgram
