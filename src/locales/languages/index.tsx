import {default as Components} from 'components/Components.language';
import {default as Errors} from 'global/languages/Errors.language';
import {default as Global} from 'global/languages/Global.language';
import {LanguageType, TranslateLanguageType} from 'locales/types';
import {default as Mocks} from 'mocks/Mocks.language';
import {default as AdhesionTerms} from 'modules/adhesionTerms/AdhesionTerms.language';
import {default as BankStatement} from 'modules/bankStatement/BankStatement.language';
import {default as BilletCashIn} from 'modules/billetCashIn/BilletCashIn.language';
import {default as BilletPayment} from 'modules/billetPayment/BilletPayment.language';
import {default as Biometry} from 'modules/biometry/Biometry.language';
import {default as CardInvoice} from 'modules/cardInvoice/CardInvoice.language';
import {default as CardInvoiceDueDate} from 'modules/cardInvoiceDueDate/CardInvoiceDueDate.language';
import {default as CardPassword} from 'modules/cardPassword/CardPassword.language';
import {default as ChangeCardPassword} from 'modules/changeCardPassword/ChangeCardPassword.language';
import {default as ChangePassword} from 'modules/changePassword/ChangePassword.language';
import {default as Contactless} from 'modules/contactless/Contactless.language';
import {default as DeviceAuthentication} from 'modules/deviceAuthentication/DeviceAuthentication.language';
import {default as DocumentSubmission} from 'modules/documentSubmission/DocumentSubmission.language';
import {default as FinancialServices} from 'modules/FinancialServices/FinancialServices.language';
import {default as FirstCardActivation} from 'modules/firstCardActivation/FirstCardActivation.language';
import {default as ForgetPassword} from 'modules/forgetPassword/ForgetPassword.language';
import {default as Home} from 'modules/home/Home.language';
import {default as LimitCard} from 'modules/limitCard/LimitCard.language';
import {default as ManageKeys} from 'modules/manageKeys/ManageKeys.language';
import {default as Menu} from 'modules/menu/Menu.language';
import {default as MoreServices} from 'modules/moreServices/MoreServices.language';
import {default as MyData} from 'modules/myData/MyData.language';
import {default as PermanentCardLock} from 'modules/permanentCardLock/PermanentCardLock.language';
import {default as PixQrCode} from 'modules/pixQrCode/PixQrCode.language';
import {default as PixReceive} from 'modules/pixReceive/PixReceive.language';
import {default as PixRefund} from 'modules/pixRefund/PixRefund.language';
import {default as PrivacyPolicy} from 'modules/privacyPolicy/PrivacyPolicy.language';
import {default as RegisterPixKey} from 'modules/registerPixKey/RegisterPixKey.language';
import {default as RequestAdditionalCard} from 'modules/requestAditionalCard/RequestAditionalCard.language';
import {default as SecondCopy} from 'modules/secondCopy/SecondCopy.language';
import {default as ShowCardPassword} from 'modules/showCardPassword/ShowCardPassword.language';
import {default as Signin} from 'modules/signin/Signin.language';
import {default as Signup} from 'modules/signup/Signup.language';
import {default as Support} from 'modules/support/Support.language';
import {default as Tariff} from 'modules/tariff/Tariff.language';
import {default as TemporaryCardUnlock} from 'modules/temporaryCardUnlock/TemporaryCardUnlock.language';
import {default as ValidadeCardDate} from 'modules/temporaryCardUnlock/ValidadeCardDate/ValidadeCardDate.language';
import {default as Terms} from 'modules/terms/Terms.language';
import {default as TermsOfUse} from 'modules/termsOfUse/TermsOfUse.language';
import {default as TransactionReceipt} from 'modules/transactionReceipt/TransactionReceipt.language';
import {default as Transfer} from 'modules/transfer/Transfer.language';
import {default as TransferPix} from 'modules/transferPix/TransferPix.language';
import {default as TravelNotice} from 'modules/travelNotice/TravelNotice.language';
import {default as VirtualCard} from 'modules/virtualCard/VirtualCard.language';
import {default as Welcome} from 'modules/welcome/Welcome.language';
import {default as Utils} from 'utilities/Utils.language';

const lang: TranslateLanguageType<LanguageType> = {
  ptBr: {
    components: Components.ptBr,
    modules: {
      home: Home.ptBr,
      financialServices: FinancialServices.ptBr,
      signin: Signin.ptBr,
      welcome: Welcome.ptBr,
      adhesionTerms: AdhesionTerms.ptBr,
      bankStatement: BankStatement.ptBr,
      billetCashIn: BilletCashIn.ptBr,
      billetPayment: BilletPayment.ptBr,
      deviceAuthentication: DeviceAuthentication.ptBr,
      forgetPassword: ForgetPassword.ptBr,
      manageKeys: ManageKeys.ptBr,
      menu: Menu.ptBr,
      biometry: Biometry.ptBr,
      myData: MyData.ptBr,
      pixQrCode: PixQrCode.ptBr,
      pixReceive: PixReceive.ptBr,
      pixRefund: PixRefund.ptBr,
      privacyPolicy: PrivacyPolicy.ptBr,
      registerPixKey: RegisterPixKey.ptBr,
      signup: Signup.ptBr,
      documentSubmission: DocumentSubmission.ptBr,
      support: Support.ptBr,
      tariff: Tariff.ptBr,
      termsOfUse: TermsOfUse.ptBr,
      transactionReceipt: TransactionReceipt.ptBr,
      transfer: Transfer.ptBr,
      transferPix: TransferPix.ptBr,
      cardPassword: CardPassword.ptBr,
      showCardPassword: ShowCardPassword.ptBr,
      changeCardPassword: ChangeCardPassword.ptBr,
      limitCard: LimitCard.ptBr,
      virtualCard: VirtualCard.ptBr,
      travelNotice: TravelNotice.ptBr,
      temporaryCardUnlock: TemporaryCardUnlock.ptBr,
      ValidadeCardDate: ValidadeCardDate.ptBr,
      firstCardActivation: FirstCardActivation.ptBr,
      permanentCardLock: PermanentCardLock.ptBr,
      secondCopy: SecondCopy.ptBr,
      cardInvoice: CardInvoice.ptBr,
      contactless: Contactless.ptBr,
      changePassword: ChangePassword.ptBr,
      terms: Terms.ptBr,
      cardInvoiceDueDate: CardInvoiceDueDate.ptBr,
      moreServices: MoreServices.ptBr,
      additionalCard: RequestAdditionalCard.ptBr,
    },
    mocks: Mocks.ptBr,
    utils: Utils.ptBr,
    global: Global.ptBr,
    errors: Errors.ptBr,
  },
  enUs: {
    components: Components.enUs,
    modules: {
      home: Home.enUs,
      financialServices: FinancialServices.ptBr,
      signin: Signin.enUs,
      welcome: Welcome.enUs,
      adhesionTerms: AdhesionTerms.enUs,
      bankStatement: BankStatement.enUs,
      billetCashIn: BilletCashIn.enUs,
      billetPayment: BilletPayment.enUs,
      deviceAuthentication: DeviceAuthentication.enUs,
      forgetPassword: ForgetPassword.enUs,
      manageKeys: ManageKeys.enUs,
      menu: Menu.enUs,
      biometry: Biometry.ptBr,
      myData: MyData.enUs,
      pixQrCode: PixQrCode.enUs,
      pixReceive: PixReceive.enUs,
      pixRefund: PixRefund.enUs,
      privacyPolicy: PrivacyPolicy.enUs,
      registerPixKey: RegisterPixKey.enUs,
      signup: Signup.enUs,
      documentSubmission: DocumentSubmission.enUs,
      support: Support.enUs,
      tariff: Tariff.enUs,
      termsOfUse: TermsOfUse.enUs,
      transactionReceipt: TransactionReceipt.enUs,
      transfer: Transfer.enUs,
      transferPix: TransferPix.enUs,
      cardPassword: CardPassword.enUs,
      showCardPassword: ShowCardPassword.enUs,
      changeCardPassword: ChangeCardPassword.enUs,
      limitCard: LimitCard.enUs,
      virtualCard: VirtualCard.enUs,
      travelNotice: TravelNotice.enUs,
      temporaryCardUnlock: TemporaryCardUnlock.enUs,
      ValidadeCardDate: ValidadeCardDate.enUs,
      firstCardActivation: FirstCardActivation.enUs,
      permanentCardLock: PermanentCardLock.enUs,
      secondCopy: SecondCopy.enUs,
      cardInvoice: CardInvoice.enUs,
      contactless: Contactless.enUs,
      changePassword: ChangePassword.enUs,
      terms: Terms.enUs,
      cardInvoiceDueDate: CardInvoiceDueDate.enUs,
      moreServices: MoreServices.enUs,
      additionalCard: RequestAdditionalCard.enUs,
    },
    mocks: Mocks.enUs,
    utils: Utils.enUs,
    global: Global.enUs,
    errors: Errors.enUs,
  },
};

export default lang;
