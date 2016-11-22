import React, { Component, PropTypes } from 'react'
import Slide from '../Slide'
import PersonCollection from '../PersonCollection'
import { organization } from '../../../config'
import { fullName } from '../../../helpers'
import { computed } from 'mobx'
import { observer } from 'mobx-react'
import { informalName } from '../../../helpers'
import {FormattedMessage} from 'react-intl'

@observer
class Adults extends Component {
  @computed get nextText() {
    return this.props.adults.length > 1 ? undefined :
           <FormattedMessage
               id="app.slides.adults.nextText"
               description="Text to show on next slide button if no other adults are added."
               defaultMessage="No other adults"
           />
  }

  render() {
    const { adults } = this.props
    const attestors = adults.items.filter(person => person.isAttestor)

    return (
      <Slide nextDisabled={!adults.isValid} nextText={this.nextText}
             id="adults" beginsSection>
        <p className="usa-font-lead">
        <FormattedMessage
              id="app.slides.adults.adultsInto"
              description="Intro Paragraph"
              defaultMessage="Okay, now let’s talk about the adults in your household."
          />
        </p>
        <p>
        <FormattedMessage
              id="app.slides.adults.notIncluding"
              description="What other adults live in household"
              defaultMessage="Not including {attestor}, what other adults live in the household?"
              values={{
                attestor: informalName(attestors[0])
              }}
          />
        </p>

        <p>
        <FormattedMessage
              id="app.slides.adults.remember"
              description="Remember Household definitions"
              defaultMessage="Remember, for the purposes of applying for school meal benefits, a household is defined as a group of people, related or unrelated, that usually live together and share income and expenses. Don't forget about:"
          />
        </p>
        <ul className="usa-content-list">
          <li>
           <FormattedMessage
              id="app.slides.adults.grandparents"
              description="Grandparents or extended family"
              defaultMessage="grandparents or other extended family members that are living with you"
            />
          </li>
          <li>
          <FormattedMessage
              id="app.slides.adults.alsoInclude"
              description="Also include people not living there right now"
              defaultMessage="Also include people that are not currently living with you, but are only away on a temporary basis, like:"
          />
            <ul>
              <li>
              <FormattedMessage
                id="app.slides.adults.collegeKids"
                description="college kids"
                defaultMessage="kids that are away at college,"
              />
              </li>
              <li>
              <FormattedMessage
                id="app.slides.adults.military"
                description="deployed military"
                defaultMessage="members of your family that are in the military, and are deployed"
              />
              </li>
            </ul>
          </li>
        </ul>

        <p><strong>
        <FormattedMessage
                id="app.slides.adults.includeRegardless"
                description="Include people regardless of age or income"
                defaultMessage="Include people regardless of age or whether they earn or receive income."
              />
        </strong></p>

        <PersonCollection
            collection={adults}
            filter={person => !person.isAttestor}
            label={
              <FormattedMessage
                  id="app.slides.adults.label"
                  description="Label used for title, add/remove buttons."
                  defaultMessage="Adult"
              />
            }
        />
      </Slide>
    )
  }
}

export default Adults
