import React, { Component, PropTypes } from 'react'
import Article from '../Article'
import Topic from '../Topic'
import { help, define } from './HelpText'
import Household from '../topics/Household'
import IEG from '../topics/IEG'
import NetSelfEmployment from '../topics/NetSelfEmployment'
import NotTheSame from '../topics/NotTheSame'
import QualifyHomeless from '../topics/QualifyHomeless'
import QualifyMigrant from '../topics/QualifyMigrant'
import RegularCash from '../topics/RegularCash'
import ReportCombat from '../topics/ReportCombat'
import WhatIncome from '../topics/WhatIncome'

//F15, F24, F40, F26-39, F16, F20, F22-23, F5, F41, F11-13, F42, F10, F43, D1-23

export default class Summary extends Component {
  render() {
    return (
      <Article>
        <Household />
        <WhatIncome />
        <Topic title={help.noIncomeTitle} body={help.noIncomeBody} />
        <Topic title={help.grossTitle} body={help.grossBody} />
        <Topic title={help.netTitle} body={help.netBody} />
        <NotTheSame />
        <Topic title={help.militaryTitle} body={help.militaryBody} />
        <ReportCombat />
        <Topic title={help.deipTitle} body={help.deipBody} />
        <Topic title={help.fssaTitle} body={help.fssaBody} />
        <Topic title={help.earningsDifferencesTitle} body={help.earningsDifferencesBody} />
        <Topic title={help.selfEmployedTitle} body={help.selfEmployedBody} />
        <Topic title={help.wagesSelfemploymentTitle} body={help.wagesSelfemploymentBody} />
        <Topic title={help.govProgramTitle} body={help.govProgramBody} />
        <Topic title={help.rentalTitle} body={help.rentalBody} />
        <Topic title={help.interestTitle} body={help.interestBody} />
        <Topic title={help.seasonalTitle} body={help.seasonalBody} />
        <Topic title={help.sharedCustodyTitle} body={help.sharedCustodyBody} />
        <QualifyMigrant />
        <QualifyHomeless />
        <Topic title={help.qualifyRunawayTitle} body={help.qualifyRunawayBody} />
        <Topic title={help.applyLaterTitle} body={help.applyLaterBody} />
        <Topic title={help.ssnTitle} body={help.ssnBody} />
        <Topic title={help.usCitizenTitle} body={help.usCitizenBody} />
        <Topic title={help.publicChargeTitle} body={help.publicChargeBody} />
        <Topic title={help.checkedTitle} body={help.checkedBody} />
        <Topic title={help.contactTitle} body={help.contactBody} />
        <Topic title={help.otherProgramsTitle} body={help.otherProgramsBody} />
        <Topic title={help.disagreeTitle} body={help.disagreeBody} />
        <bodyLabels>Definitions</bodyLabels>
        <IEG />
        <Topic title={define.mckinneyTerm} body={define.mckinneyDef} />
        <Topic title={define.mepTerm} body={define.mepDef} />
        <Topic title={define.runawayHomelessActTerm} body={define.runawayHomelessActDef} />
        <Topic title={define.currentTerm} body={define.currentDef} />
        <Topic title={define.cashBonusTerm} body={define.cashBonusDef} />
        <NetSelfEmployment />
        <Topic title={define.ssiTerm} body={define.ssiDef} />
        <Topic title={define.cashAssistanceTerm} body={define.cashAssistanceDef} />
        <Topic title={define.alimonyTerm} body={define.alimonyDef} />
        <Topic title={define.childSupportTerm} body={define.childSupportDef} />
        <Topic title={define.unemploymentTerm} body={define.unemploymentDef} />
        <Topic title={define.workersCompTerm} body={define.workersCompDef} />
        <Topic title={define.strikeBenefitsTerm} body={define.strikeBenefitsDef} />
        <Topic title={define.ssdiTerm} body={define.ssdiDef} />
        <Topic title={define.veteransBenefitsTerm} body={define.veteransBenefitsDef} />
        <Topic title={define.socialSecurityTerm} body={define.socialSecurityDef} />
        <Topic title={define.blackLungTerm} body={define.blackLungDef} />
        <Topic title={define.railroadRetirementTerm} body={define.railroadRetirementDef} />
        <RegularCash />
        <Topic title={define.pensionTerm} body={define.pensionDef} />
        <Topic title={define.annuityTerm} body={define.annuityDef} />
        <Topic title={define.trustTerm} body={define.trustDef} />
      </Article>
    )
  }
}
