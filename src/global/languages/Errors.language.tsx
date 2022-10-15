import {ErrorsLanguageType} from 'global/types/languages.type';
import {TranslateLanguageType} from 'locales/types';

const lang: TranslateLanguageType<ErrorsLanguageType> = {
  ptBr: {
    default: {
      title: 'ERRO',
      message:
        'Ocorreu um erro interno.\nPor favor, tente novamente mais tarde',
    },
    sessionExpired: {
      title: 'Sessão Expirada',
      message:
        'Por motivos de segurança, encerramos a sua sessão por inatividade.',
    },
    offline: {
      message:
        'Erro ao estabelecer comunicação com a rede.\nPor favor, tente novamente mais tarde',
    },
    getAppConfigurations: {
      default: {
        message:
          'Não foi possível recuperar as configurações do aplicativo.\nPor favor, tente novamente mais tarde',
      },
    },
    postVerifyDocument: {
      default: {
        message:
          'Não foi possível verificar este número de documento.\nPor favor, tente novamente mais tarde',
      },
    },
    getAccountByID: {
      not_found: {
        message:
          'Não foi possível encontrar sua conta.\nPor favor, tente novamente mais tarde',
      },
      default: {
        message:
          'Não foi possível recuperar as informações da sua conta.\nPor favor, tente novamente mais tarde',
      },
    },
    postUploads: {
      default: {
        message:
          'Não foi possível envia o documento.\nPor favor, tente novamente mais tarde',
      },
    },
    postCreatePaymentAccount: {
      default: {
        message:
          'Não foi possível criar a conta de pagamento.\nPor favor, tente novamente mais tarde',
      },
    },
    getVerifyIdentity: {
      default: {
        message:
          'Não foi possível recuperar as perguntas para verificação de identidade.\nPor favor, tente novamente mais tarde',
      },
    },
    postVerifyIdentity: {
      default: {
        message:
          'Não foi possível criar as respostas da verificação de identidade.\nPor favor, tente novamente mais tarde',
      },
    },
    postVerifyIdentityAnswers: {
      default: {
        message:
          'Não foi possível enviar as respostas da verificação de identidade.\nPor favor, tente novamente mais tarde',
      },
    },
    getUploadsByID: {
      default: {
        message:
          'Não foi possível recuperar o documento.\nPor favor, tente novamente mais tarde',
      },
    },
    postBiometries: {
      default: {
        message:
          'Não foi possível enviar a selfie.\nPor favor, tente novamente mais tarde',
      },
    },
    getAccountByDocument: {
      default: {
        message:
          'Não foi possível recuperar as informações da conta a partir desse documento.\nPor favor, tente novamente mais tarde',
      },
    },
    getPayee: {
      default: {
        message:
          'Não foi possível recuperar as informações da conta informada.\nPor favor, tente novamente mais tarde',
      },
    },
    patchAccount: {
      default: {
        message:
          'Não foi possível atualizar os dados da conta.\nPor favor, tente novamente mais tarde',
      },
    },
    patchAccountProperty: {
      default: {
        message:
          'Não foi possível salvar as informações da sua conta.\nPor favor, tente novamente mais tarde',
      },
    },
    postAccountEnrich: {
      default: {
        message:
          'Não foi possível realizar o processo de enriquecimento de dados da conta.\nPor favor, tente novamente mais tarde',
      },
    },
    putAccountDataByCardID: {
      default: {
        message:
          'Não foi possível realizar a alteração dos dados do seu cartão.\nPor favor, tente novamente mais tarde',
      },
    },
    putAccountAddressByCardID: {
      default: {
        message:
          'Não foi possível realizar a alteração do endereço do seu cartão.\nPor favor, tente novamente mais tarde',
      },
    },
    getBalanceHistoryByID: {
      default: {
        message:
          'Não foi possível recuperar as informações de extrato.\nPor favor, tente novamente mais tarde',
      },
    },
    getPaymentAccountByID: {
      not_found: {
        message:
          'Não foi possível encontrar sua conta de pagamento.\nPor favor, tente novamente mais tarde.',
      },
      default: {
        message:
          'Não foi possível recuperar as informações da conta de pagamento.\nPor favor, tente novamente mais tarde',
      },
    },
    getPixKey: {
      default: {
        message:
          'Não foi possível recuperar a chave Pix informada.\nPor favor, tente novamente mais tarde',
      },
    },
    postPixKey: {
      3014: {
        message:
          'Não foi possível registrar a chave Pix informada. Limite de cadastro de chaves excedido.',
      },
      default: {
        message:
          'Não foi possível criar a chave Pix.\nPor favor, tente novamente mais tarde',
      },
    },
    deletePixKey: {
      default: {
        message:
          'Não foi possível deletar a chave Pix.\nPor favor, tente novamente mais tarde',
      },
    },
    updatePixKey: {
      default: {
        message:
          'Não foi possível atualizar a chave Pix.\nPor favor, tente novamente mais tarde',
      },
    },
    postCreatePixReivindication: {
      default: {
        message:
          'Não foi possível criar a reivindicação da chave Pix.\nPor favor, tente novamente mais tarde',
      },
      title: 'Transação não concluída',
      alreadyExistReivindication:
        'Portabilidade já iniciada por outro usuário do Pix.',
      alreadyExistMyReivindication:
        'Você já solicitou a portabilidade dessa chave Pix. Favor acompanhar o processo na área Minhas Chaves.',
    },
    postCancelPixReivindication: {
      title: 'Transação não concluída',
      default: {
        message:
          'Não foi possível cancelar este processo.\nTente novamente pelas Minhas Chaves',
      },
    },
    postConfirmPixReivindication: {
      default: {
        message:
          'Não foi possível confirmar a reivindicação da chave Pix.\nPor favor, tente novamente mais tarde',
      },
    },
    postCompletePixReivindication: {
      default: {
        message:
          'Não foi possível completar a reivindicação da chave Pix.\nPor favor, tente novamente mais tarde',
      },
    },
    postQueryPixReivindication: {
      default: {
        message:
          'Não foi possível buscar a reivindicação da chave Pix.\nPor favor, tente novamente mais tarde',
      },
    },
    postCreatePixQrCode: {
      default: {
        message:
          'Não foi possível criar o QRCode.\nPor favor, tente novamente mais tarde',
      },
    },
    postQueryPixQrCode: {
      owned_key: {
        message:
          'Não foi possível continuar a transação, pois a chave informada pertence a você mesmo.\nPor favor, tente novamente com outra chave',
      },
      default: {
        message:
          'Não foi possível buscar o QRCode.\nPor favor, tente novamente mais tarde',
      },
    },
    postTransactionCashInRecharge: {
      default: {
        message:
          'Não foi possível gerar o boleto.\nPor favor, tente novamente mais tarde',
      },
    },
    postTransactionP2PMovement: {
      same_bank_account: {
        message:
          'Não é possível realizar uma movimentação informando seus dados bancários.\nPor favor, preencha os campos novamente.',
      },
      default: {
        message:
          'Não foi possível realizar a movimentação.\nPor favor, tente novamente mais tarde',
      },
    },
    postTransactionCashOutEft: {
      same_bank_account: {
        message:
          'Não é possível realizar uma transferência informando seus dados bancários.\nPor favor, preencha os campos novamente.',
      },
      default: {
        message:
          'Não foi possível continuar a transferência.\nPor favor, tente novamente mais tarde',
      },
    },
    postTransactionP2SBarcode: {
      default: {
        message:
          'Não foi possível criar a transação.\nPor favor, tente novamente mais tarde',
      },
      invalidDigitableLine: {
        message:
          'Código de barras inválido.\nPor favor, tente novamente mais tarde',
      },
    },
    postTransactionP2SBarcodeConfirm: {
      default: {
        message:
          'Não foi possível confirmar o pagamento por boleto.\nPor favor, tente novamente mais tarde',
      },
    },

    postTransactionP2SBarcodePay: {
      default: {
        message:
          'Não foi possível completar o pagamento.\nPor favor, tente novamente mais tarde',
      },
    },
    postTransactionCashOutPix: {
      same_bank_account: {
        message:
          'Não é possível realizar uma transferência pix informando seus dados bancários.\nPor favor, preencha os campos novamente.',
      },
      owned_key: {
        message:
          'Não foi possível realizar a transação, pois a chave informada pertence a você mesmo.\nPor favor, tente novamente com outra chave',
      },
      cancelled: {
        message: 'Transação cancelada.\nPor favor, tente novamente mais tarde',
      },
      denied: {
        message: 'Transação negada.\nPor favor, tente novamente mais tarde',
      },
      default: {
        message:
          'Não foi possível realizar o pagamento.\nPor favor, tente novamente mais tarde',
      },
    },
    postTransactionCashOutPixRefund: {
      pix_refund_available_limit_exceeded: {
        message:
          'Valor informado excede limite disponível para devolução.\nPor favor, tente novamente mais tarde',
      },
      cancelled: {
        message: 'Devolução cancelada.\nPor favor, tente novamente mais tarde',
      },
      denied: {
        message: 'Devolução negada.\nPor favor, tente novamente mais tarde',
      },
      default: {
        message:
          'Não foi possível restituir essa transação Pix.\nPor favor, tente novamente mais tarde',
      },
    },

    postSignIn: {
      manual_blocked: {
        message:
          'Login bloqueado manualmente no dia %{blockedAt}. Motivo de bloqueio: "%{message}".\nPor favor, tente novamente no dia %{unblockedAt}.',
      },
      blocked_wrong_password: {
        message:
          'Login bloqueado às %{blockedAt} por excesso de tentativas com credenciais inválidas.\nPor favor, revise seus dados e tente novamente às %{unblockedAt}.',
      },
      wrong_password_or_username: {
        title: 'Usuário ou Senha incorretos',
        message:
          'Verifique os dados inseridos e tente novamente. Se for seu primeiro acesso neste App realize seu cadastro.',
      },
      401: {
        title: 'Usuário ou Senha Incorreta',
        message: 'Por favor, verifique novamente os campos.',
      },
      default: {
        message:
          'Não foi possível realizar o login.\nPor favor, tente novamente mais tarde',
      },
    },
    postForgetPassword: {
      404: {
        message:
          'Não foi possível encontrar um usuário para este número de documento.\nPor favor, tente novamente mais tarde',
      },
    },
    postForgetPasswordConfirm: {
      422: {
        title: 'Código de Validação inválido',
        message: 'O código informado não é válido. Por favor, tente novamente.',
      },
    },
    postForgetPasswordRegister: {
      default: {
        message:
          'Serviço indisponível no momento, tente novamente em alguns instantes.',
      },
    },
    postToken: {
      404: {
        message:
          'Não foi possível enviar o token.\nPor favor, tente novamente mais tarde',
      },
    },
    postTokenEmail: {
      default: {
        message:
          'Não foi possível enviar o token por e-mail.\nPor favor, tente novamente mais tarde',
      },
    },
    postTokenVerify: {
      422: {
        title: 'Código de Validação inválido',
        message: 'O código informado não é válido. Por favor, tente novamente.',
      },
    },
    postSignup: {
      default: {
        message:
          'Não foi possível iniciar o cadastro.\nPor favor, tente novamente mais tarde',
      },
    },
    postSignupConfirm: {
      422: {
        title: 'Código de Validação inválido',
        message: 'O código informado não é válido. Por favor, tente novamente.',
      },
      default: {
        message:
          'Não foi possível confirmar o token informado.\nPor favor, tente novamente mais tarde',
      },
    },
    postRegisterPassword: {
      422: {
        title: 'Senha muito fraca',
        message:
          'Por favor, digite uma senha mais forte seguindo os requisitos',
      },
      default: {
        title: 'Erro ao cadastrar a senha',
        message:
          'Não foi possível cadastrar a senha.\nPor favor, tente novamente mais tarde',
      },
    },

    getTransactionByID: {
      default: {
        message:
          'Não foi possível obter os dados deste comprovante.\nPor favor, tente novamente mais tarde',
      },
    },
    getBalanceHistoryCoreByID: {
      default: {
        message:
          'Não foi possível recuperar os recebimentos e gastos do período.\nPor favor, tente novamente mais tarde',
      },
    },
    getCompanyDocuments: {
      default: {
        message:
          'Não foi possível recuperar o documento.\nPor favor, tente novamente mais tarde',
      },
    },
    postCompanyDocumentsConfirm: {
      default: {
        message:
          'Não foi possível confirmar o documento.\nPor favor, tente novamente mais tarde',
      },
    },
    getBanks: {
      default: {
        message:
          'Não foi possível recuperar a lista de bancos.\nPor favor, tente novamente mais tarde',
      },
    },
    getUser: {
      default: {
        message:
          'Não foi possível recuperar o usuário.\nPor favor, tente novamente mais tarde',
      },
    },
    getUserDataAndAccounts: {
      default: {
        message:
          'Não foi possível recuperar os dados do usuário e as contas associadas.\nPor favor, tente novamente mais tarde',
      },
    },
    postRegisterDevice: {
      default: {
        message:
          'Não foi possível registar o dispositivo.\nPor favor, tente novamente mais tarde',
      },
    },
    getCardPasswordByID: {
      default: {
        message:
          'Não foi possível recuperar a senha do cartão.\nPor favor, tente novamente mais tarde.',
      },
    },
    postCardPasswordVerifyByID: {
      default: {
        message:
          'Não foi possível verificar a senha do cartão.\nPor favor, tente novamente',
      },
    },
    patchCardPasswordByID: {
      default: {
        message:
          'Não foi possível alterar a senha do cartão.\nPor favor, tente novamente',
      },
    },
    getCardCreditLimit: {
      default: {
        message:
          'Não foi possível recuperar os dados de limite do cartão.\nPor favor, tente novamente',
      },
    },
    getCardLimitManagement: {
      default: {
        message:
          'Não foi possível recuperar os dados de limite de segurança do cartão.\nPor favor, tente novamente',
      },
    },
    putCardLimitManagement: {
      default: {
        message:
          'Não foi possível atualizar os dados de limite de segurança do cartão.\nPor favor, tente novamente',
      },
    },
    getCountryRegion: {
      default: {
        message:
          'Não foi possível recuperar os dados de região/país.\nPor favor, tente novamente',
      },
    },
    getWarningTravelByID: {
      default: {
        message:
          'Não foi possível recuperar os histórico de viagens.\nPor favor, tente novamente',
      },
    },
    putWarningTravelByID: {
      default: {
        message:
          'Não foi possível realizar o aviso de viagem.\nPor favor, tente novamente',
      },
    },
    encrypt: {
      message:
        'Não foi possível criptografar os dados.\nPor favor, tente novamente',
    },
    passwordsDoNotMeetRequirements: {
      message: 'Verifique se as senhas correspondem aos requisitos',
    },
    decrypt: {
      message:
        'Não foi possível descriptografar os dados.\nPor favor, tente novamente',
    },
    postCardActivationByID: {
      default: {
        message:
          'Não foi possível desbloquear temporariamente seu cartão.\nPor favor, tente novamente',
      },
    },
    postCardDeactivationByID: {
      default: {
        message:
          'Não foi possível bloquear temporariamente seu cartão.\nPor favor, tente novamente',
      },
    },
    postCardPasswordByID: {
      default: {
        message:
          'Não foi possível criar a senha do cartão.\nPor favor, tente novamente',
      },
    },
    postCardBlockByID: {
      default: {
        message:
          'Não foi possível bloquear permanentemente seu cartão.\nPor favor, tente novamente',
      },
    },
    getCardDataByID: {
      default: {
        message:
          'Não foi possível recuperar os dados do cartão.\nPor favor, tente novamente',
      },
    },
    post2WayCard: {
      default: {
        message:
          'Não foi possível solicitar a segunda via do cartão.\nPor favor, tente novamente',
      },
    },
    postContactless: {
      default: {
        message:
          'Não foi possível alterar o status do contactless.\nPor favor, tente novamente',
      },
    },
    fetchContactless: {
      default: {
        message:
          'Não foi possível buscar o status do contactless.\nPor favor, tente novamente',
      },
    },
    getInvoiceByID: {
      default: {
        title: 'Erro ao carregar as transações',
        message: 'Por favor, tente novamente mais tarde',
      },
    },
    getInvoiceDueDateByID: {
      default: {
        message:
          'Não foi possível recuperar as datas de vencimento da fatura.\nPor favor, tente novamente',
      },
    },
    getBestPurchaseDay: {
      default: {
        message:
          'Não foi possível recuperar o melhor dia para compra.\nPor favor, tente novamente.',
      },
    },
    getDueDate: {
      default: {
        message:
          'Não foi possivel carregar as datas para alteração.\nPor favor, tente novamente.',
      },
    },
    postChangeDueDate: {
      default: {
        message:
          'Não foi possivel alterar o dia de vencimento.\nPor favor, tente novamente. lembramos que o dia de vencimento não pode ser alterado dentro de 180 dias, caso ja tenha sido alterado.',
      },
    },
    postAdditionalCard: {
      422: {
        message: 'Dados Incorretos',
      },
      404: {
        message: 'Últimos 4 dígitos não encontrados',
      },
      default: {
        message: 'Falha na comunicação com o servidor',
      },
    },
  },
  enUs: {
    default: {
      title: 'ERROR',
      message: 'An internal error has occurred\nPlease try again later',
    },
    sessionExpired: {
      title: 'Session expired',
      message:
        'For security reasons, we have closed your session due to inactivity.',
    },
    offline: {
      message:
        'Error establishing communication with the network.\nPlease try again later',
    },
    getAppConfigurations: {
      default: {
        message:
          'Unable to retrieve application configurations.\nPlease try again later',
      },
    },
    postVerifyDocument: {
      default: {
        message:
          'This document number could not be verified..\nPlease try again later',
      },
    },
    getAccountByID: {
      not_found: {
        message: 'Account could not be found.\nPlease try again later.',
      },
      default: {
        message:
          'We were unable to retrieve your account information.\nPlease try again later',
      },
    },
    postUploads: {
      default: {
        message: 'Could not send document.\nPlease try again later',
      },
    },
    postCreatePaymentAccount: {
      default: {
        message: 'Unable to create payment account.\nPlease try again later',
      },
    },
    getVerifyIdentity: {
      default: {
        message:
          'Unable to retrieve questions for identity verification.\nPlease try again later',
      },
    },
    postVerifyIdentity: {
      default: {
        message:
          'Could not create identity verification responses.\nPlease try again later',
      },
    },
    postVerifyIdentityAnswers: {
      default: {
        message:
          'Could not send identity verification responses.\nPlease try again later',
      },
    },
    getUploadsByID: {
      default: {
        message: 'Unable to retrieve document.\nPlease try again later',
      },
    },
    postBiometries: {
      default: {
        message: 'Unable to send selfie.\nPlease try again later',
      },
    },
    getAccountByDocument: {
      default: {
        message:
          'We were unable to retrieve your account information from that document.\nPlease try again later',
      },
    },
    getPayee: {
      default: {
        message:
          'Unable to retrieve the account information entered.\nPlease try again later',
      },
    },
    patchAccount: {
      default: {
        message: 'Unable to update account data.\nPlease try again later',
      },
    },
    patchAccountProperty: {
      default: {
        message:
          'We were unable to save your account information.\nPlease try again later',
      },
    },
    postAccountEnrich: {
      default: {
        message:
          'It was not possible to perform the account data enrichment process.\nPlease try again later',
      },
    },
    putAccountDataByCardID: {
      default: {
        message:
          'We were unable to change your card details.\nPlease try again later',
      },
    },
    putAccountAddressByCardID: {
      default: {
        message:
          'We were unable to change your card address.\nPlease try again later',
      },
    },
    getBalanceHistoryByID: {
      default: {
        message:
          'Could not retrieve bank statement information.\nPlease try again later',
      },
    },
    getPaymentAccountByID: {
      not_found: {
        message: 'Payment account could not be found.\nPlease try again later.',
      },
      default: {
        message:
          'Payment account information could not be retrieved.\nPlease try again later',
      },
    },
    getPixKey: {
      default: {
        message: 'Pix key could not be retrieved.\nPlease try again later',
      },
    },
    postPixKey: {
      3014: {
        message:
          'The 20 entries limit has been exceeded for the set: participant, branch and account number.There are currently 20 entries and 0 claimed.',
      },
      default: {
        message: 'The Pix key could not be created.\nPlease try again later',
      },
    },
    deletePixKey: {
      default: {
        message:
          'It was not possible to delete the Pix key.\nPlease try again later',
      },
    },
    updatePixKey: {
      default: {
        message: 'Could not update Pix key.\nPlease try again later',
      },
    },
    postCreatePixReivindication: {
      default: {
        message: 'Pix key claim could not be created.\nPlease try again later',
      },
      title: 'Transaction not completed',
      alreadyExistReivindication:
        'Portability already started by another Pix user.',
      alreadyExistMyReivindication:
        'You have already requested portability of this Pix key. Please follow the process in the My Keys area.',
    },
    postCancelPixReivindication: {
      title: 'Transaction not completed',
      default: {
        message:
          'It was not possible to cancel this process. Try again through My Keys',
      },
    },
    postConfirmPixReivindication: {
      default: {
        message:
          'Pix key claim could not be confirmed.\nPlease try again later',
      },
    },
    postCompletePixReivindication: {
      default: {
        message:
          'Pix key claim could not be completed.\nPlease try again later',
      },
    },
    postQueryPixReivindication: {
      default: {
        message: 'Pix key claim could not be fetched.\nPlease try again later',
      },
    },
    postCreatePixQrCode: {
      default: {
        message: 'Could not create QRCode.\nPlease try again later',
      },
    },
    postQueryPixQrCode: {
      owned_key: {
        message:
          'Unable to continue transaction as a given key belongs to you.\nPlease try again with another key',
      },
      default: {
        message: 'Could not fetch QRCode.\nPlease try again later',
      },
    },
    postTransactionCashInRecharge: {
      default: {
        message: 'Could not generate bank slip.\nPlease try again later',
      },
    },
    postTransactionP2PMovement: {
      same_bank_account: {
        message:
          'It is not possible to perform a transaction informing your bank details.\nPlease fill in the fields again.',
      },
      default: {
        message:
          'Bank transaction could not be performed.\nPlease try again later',
      },
    },
    postTransactionCashOutEft: {
      same_bank_account: {
        message:
          'It is not possible to continue a transfer with your bank details.\nPlease fill in the fields again.',
      },
      default: {
        message:
          'Bank transfer could not be continued.\nPlease try again later',
      },
    },
    postTransactionP2SBarcode: {
      default: {
        message:
          'Bank transaction could not be created.\nPlease try again later',
      },
      invalidDigitableLine: {
        message: 'Invalid barcode.\nPlease try again later',
      },
    },
    postTransactionP2SBarcodeConfirm: {
      default: {
        message:
          'Payment by bank slip could not be confirmed.\nPlease try again later',
      },
    },
    postTransactionP2SBarcodePay: {
      default: {
        message: 'Payment could not be completed.\nPlease try again later',
      },
    },
    postTransactionCashOutPix: {
      same_bank_account: {
        message:
          'It is not possible to perform a transaction informing your bank details.\nPlease fill in the fields again.',
      },
      owned_key: {
        message:
          'Unable to continue transaction as a given key belongs to you.\nPlease try again with another key',
      },
      cancelled: {
        message: 'Transaction canceled.\nPlease try again later',
      },
      denied: {
        message: 'Transaction denied.\nPlease try again later',
      },
      default: {
        message: 'Payment could not be made.\nPlease try again later',
      },
    },
    postTransactionCashOutPixRefund: {
      pix_refund_available_limit_exceeded: {
        message:
          'Informed value exceeds limit available for return.\nPlease try again later',
      },
      cancelled: {
        message: 'Return canceled.\nPlease try again later',
      },
      denied: {
        message: 'Return denied.\nPlease try again later',
      },
      default: {
        message:
          'We were unable to refund this Pix transaction.\nPlease try again later',
      },
    },
    postSignIn: {
      manual_blocked: {
        message:
          'Login manually blocked at %{blockedAt}. Blocked reason: "%{message}".\nPlease try again at %{unblockedAt}.',
      },
      blocked_wrong_password: {
        message:
          'Login blocked at %{blockedAt} for too many attempts with invalid credentials.\nPlease review your data and try again on %{unblockedAt}.',
      },
      wrong_password_or_username: {
        title: 'Incorrect username or password',
        message:
          'Please check the data entered and try again. If it is your first access to this App, register.',
      },
      401: {
        title: 'Incorrect Username or Password',
        message: 'Please double check the fields.',
      },
      default: {
        message: 'Unable to login.\nPlease try again later',
      },
    },
    postForgetPassword: {
      404: {
        message:
          'Could not find a user for this document number.\nPlease try again later',
      },
    },
    postForgetPasswordConfirm: {
      422: {
        title: 'Invalid Validation Code',
        message: 'The code entered is not valid. Please try again.',
      },
    },
    postSignup: {
      default: {
        message:
          'It was not possible to start the registration.\nPlease try again later',
      },
    },
    postSignupConfirm: {
      422: {
        title: 'Invalid Validation Code',
        message: 'The code entered is not valid. Please try again.',
      },
      default: {
        message: 'The token could not be verified.\nPlease try again later',
      },
    },
    postRegisterPassword: {
      422: {
        title: 'Password too weak',
        message: 'Please enter a stronger password following the requirements',
      },
      default: {
        title: 'Error registering password',
        message:
          'It was not possible to register the password.\nPlease try again later',
      },
    },
    postForgetPasswordRegister: {
      default: {
        message: 'Service currently unavailable.\nPlease try again later',
      },
    },
    postToken: {
      404: {
        message: 'The token could not be sent.\nPlease try again later',
      },
    },
    postTokenEmail: {
      default: {
        message: 'Unable to send the token by email.\nPlease try again later',
      },
    },
    postTokenVerify: {
      422: {
        title: 'Invalid Validation Code',
        message: 'The code entered is not valid. Please try again.',
      },
    },
    getTransactionByID: {
      default: {
        message:
          'It was not possible to obtain the data from this voucher.\nPlease try again later',
      },
    },
    getBalanceHistoryCoreByID: {
      default: {
        message:
          'It was not possible to recover the receipts and expenses for the period.\nPlease try again later',
      },
    },
    getCompanyDocuments: {
      default: {
        message: "Couldn't recover the document.\nPlease try again later",
      },
    },
    postCompanyDocumentsConfirm: {
      default: {
        message: 'Document could not be confirmed.\nPlease try again later',
      },
    },
    getBanks: {
      default: {
        message: 'Unable to retrieve bank list.\nPlease try again later',
      },
    },
    getUser: {
      default: {
        message: 'Unable to recover user.\nPlease try again later',
      },
    },
    getUserDataAndAccounts: {
      default: {
        message:
          'Unable to retrieve user data and associated accounts.\nPlease try again later',
      },
    },
    postRegisterDevice: {
      default: {
        message: 'Unable to register device.\nPlease try again later',
      },
    },
    getCardPasswordByID: {
      default: {
        message: 'Unable to retrieve card password.\nPlease try again later.',
      },
    },
    postCardPasswordVerifyByID: {
      default: {
        message: 'Unable to verify card password.\nPor favor, tente novamente',
      },
    },
    patchCardPasswordByID: {
      default: {
        message: 'Unable to change card password.\nPor favor, tente novamente',
      },
    },
    getCardCreditLimit: {
      default: {
        message: 'Unable to retrieve card limit data.\nPlease try again.',
      },
    },
    getCardLimitManagement: {
      default: {
        message:
          'Unable to retrieve card safety threshold data.\nPlease try again',
      },
    },
    putCardLimitManagement: {
      default: {
        message:
          'Unable to update card safety threshold data.\nPlease try again',
      },
    },
    getCountryRegion: {
      default: {
        message: 'Could not retrieve region/country data.\nPlease try again',
      },
    },
    getWarningTravelByID: {
      default: {
        message: 'Unable to retrieve travel histories.\nPlease try again',
      },
    },
    putWarningTravelByID: {
      default: {
        message: 'Unable to perform travel notice.\nPlease try again',
      },
    },
    encrypt: {
      message: 'Unable to encrypt data.\nPlease try again',
    },
    passwordsDoNotMeetRequirements: {
      message: 'Verify passwords match requirements',
    },
    decrypt: {
      message: 'Unable to decrypt data.\nPlease try again',
    },
    postCardActivationByID: {
      default: {
        message: 'Unable to temporarily unlock your card.\nPlease try again',
      },
    },
    postCardDeactivationByID: {
      default: {
        message: 'Unable to temporarily block your card.\nPlease try again',
      },
    },
    postCardPasswordByID: {
      default: {
        message: 'Unable to create card password.\nPlease try again',
      },
    },
    postCardBlockByID: {
      default: {
        message: 'Unable to permanently lock your card.\nPlease try again',
      },
    },
    getCardDataByID: {
      default: {
        message: 'Unable to retrieve card data.\nPlease try again',
      },
    },
    post2WayCard: {
      default: {
        message: 'Could not request second copy card.\nPlease try again',
      },
    },
    postContactless: {
      default: {
        message: 'Could not change status.\nPlease try again',
      },
    },
    fetchContactless: {
      default: {
        message: 'Could not get status.\nPlease try again',
      },
    },
    getInvoiceByID: {
      default: {
        title: 'Error loading transactions',
        message: 'Please, try again later',
      },
    },
    getInvoiceDueDateByID: {
      default: {
        message: 'Unable to retrieve invoice due dates.\nPlease try again',
      },
    },
    getBestPurchaseDay: {
      default: {
        message:
          'It was not possible to retrieve the best day to buy.\nPlease try again.',
      },
    },
    getDueDate: {
      default: {
        message: 'It was not possible to load the days.\nPlease try again.',
      },
    },
    postChangeDueDate: {
      default: {
        message: 'It was not possible to change due date.\nPlease try again.',
      },
    },
    postAdditionalCard: {
      422: {
        message: 'Inconsistent Information',
      },
      404: {
        message: 'Uuid/last4digits not found!',
      },
      default: {
        message: 'Internal Server Error',
      },
    },
  },
};

export default lang;
