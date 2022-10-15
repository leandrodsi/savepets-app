import React, {Dispatch, useEffect} from 'react';
import {GestureResponderEvent, Keyboard, Modal} from 'react-native';
import styled from 'styled-components/native';

import {fontFamily, fontSize} from 'assets';
import {ButtonArrowClose, ButtonDefault} from 'components/buttons';
import {Label} from 'components/general';
import {translate} from 'locales';
import {ModalMessageButtonType} from 'store/modal/modal.types';
import {ActionType, AppActionsType, AppStateType} from 'store/types';
import {isEmptyString} from 'utilities';
import {v4 as uuidv4} from 'uuid';
import {
  ModalBackground,
  ModalContent,
  ModalForeground,
  ModalTitle,
} from '../index';

export interface ModalMessagePropsType {
  state: AppStateType;
  dispatch: Dispatch<ActionType>;
  actions: AppActionsType;
}

const ModalMessage = ({state, actions}: ModalMessagePropsType) => {
  const {modal, configurations} = state;
  const {
    title,
    status,
    visibility,
    description,
    highlightedDescription,
    boldDescription,
    buttons,
    descriptionColor,
    titleColor,
    enableOnPressBackground,
    hideTitle,
    onRequestClose,
  } = modal.message;
  const {colors} = configurations;

  useEffect(() => {
    if (visibility) {
      Keyboard.dismiss();
    }
  }, [visibility]);

  const handleModalVisibility = (disableOnRequestClose?: boolean) => {
    if (onRequestClose && !disableOnRequestClose) {
      onRequestClose();
    }

    actions.modal.resetMessageState();
  };

  const handleTitleText = () => {
    if (!title || title === '') {
      if (status === 'success') {
        return translate('components.modal.message.success');
      } else if (status === 'error') {
        return translate('components.modal.message.error');
      }
    }
    return title;
  };

  const handleButtonOnPress = (
    button: ModalMessageButtonType,
    event: GestureResponderEvent,
  ) => {
    const {onPress, disableOnRequestClose} = button;

    if (onPress) {
      onPress(event);
    }

    handleModalVisibility(disableOnRequestClose);
  };

  const renderButtons = () => {
    return (
      buttons &&
      buttons.map((button) => (
        <ButtonDefault
          marg={buttons.length > 1 ? '0px 0px 13px' : ''}
          key={uuidv4()}
          {...button}
          onPress={(e) => handleButtonOnPress(button, e)}
        />
      ))
    );
  };

  return (
    <Wrapper>
      <Modal
        animationType="none"
        transparent={true}
        visible={visibility === true}
        onRequestClose={() => handleModalVisibility()}>
        <ModalBackground
          backgroundOnPress={
            enableOnPressBackground ? handleModalVisibility : undefined
          }
        />
        <ModalForeground>
          <ModalContent>
            <ButtonArrowClose
              onPress={
                enableOnPressBackground
                  ? () => handleModalVisibility()
                  : undefined
              }
            />
            {!!handleTitleText() && !hideTitle && (
              <ModalTitle color={titleColor}>{handleTitleText()}</ModalTitle>
            )}
            {description && !isEmptyString(description) && (
              <Label
                fontFamily={fontFamily.primary.regular}
                color={descriptionColor ? descriptionColor : colors.primary.hex}
                size={fontSize.large}
                pad={'0px 0px 31px'}
                lineHeight={'22'}>
                {description}{' '}
                {highlightedDescription?.text && (
                  <Label
                    fontFamily={fontFamily.primary.bold}
                    color={
                      descriptionColor ? descriptionColor : colors.primary.hex
                    }
                    size={fontSize.large}
                    textDecorationLine="underline"
                    pad={'0px 0px 31px'}
                    lineHeight={'22'}
                    {...highlightedDescription}>
                    {highlightedDescription.text}
                  </Label>
                )}
                {boldDescription?.text && (
                  <Label
                    fontFamily={fontFamily.primary.bold}
                    color={
                      descriptionColor ? descriptionColor : colors.primary.hex
                    }
                    size={fontSize.large}
                    pad={'0px 0px 31px'}
                    lineHeight={'22'}
                    {...boldDescription}>
                    {boldDescription.text}
                  </Label>
                )}
              </Label>
            )}
            {renderButtons()}
          </ModalContent>
        </ModalForeground>
      </Modal>
    </Wrapper>
  );
};

const Wrapper = styled.View``;

export default ModalMessage;
