import React, { Component, PropTypes } from 'react'
import { observer } from 'mobx-react'
import Select from './Select'
import { FormattedMessage } from 'react-intl'

@observer
class IncomeSourceHourlyPeriod extends Component {
  constructor (props) {
    super(props)
    this.defaultOnChange = this.defaultOnChange.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    const handler = this.props.onChange || this.defaultOnChange
    handler(this.props.fieldName, event.target.value)
  }

  // side effect, but easier to handle once here than pass in every time
  defaultOnChange(fieldName, value) {
    this.props.incomeSource[fieldName] = value
  }

  render() {
    const { incomeSource, fieldName } = this.props
    const hours = incomeSource.hourlyHours
    const value = incomeSource[fieldName]

    return (
      <div className="usa-input-grid usa-input-grid-medium">
        <Select value={incomeSource[fieldName]}
                onChange={this.handleChange}>
          <option value="" disabled>
            <FormattedMessage
                id="app.incomeSourceHourlyPeriod.placeholder"
                description="Default text for hourly period select box."
                defaultMessage="hours per…"
            />
          </option>
          <option value="week">
            <FormattedMessage
                id="app.incomeSourceHourlyPeriod.week"
                description="Number of hours per week."
                defaultMessage="hours per week"
            />
          </option>
          <option value="month">
            <FormattedMessage
                id="app.incomeSourceHourlyPeriod.month"
                description="Number of hours per month."
                defaultMessage="hours per month"
            />
          </option>
        </Select>
      </div>
    )
  }
}

IncomeSourceHourlyPeriod.propTypes = {
  incomeSource: PropTypes.object.isRequired,
  fieldName: PropTypes.string,
  onChange: PropTypes.func
}

IncomeSourceHourlyPeriod.defaultProps = {
  fieldName: 'hourlyPeriod'
}

export default IncomeSourceHourlyPeriod
