/**
 * @class FormValidator
 * @description Validates forms!
 * @author some good lookin' dudes at MediaMonks
 *
 * @Usage:
 *      Thie formvalidator will look for elements with data-validation attributes. This attribute can contain multiple
 *      validators (comma seperated).
 *
 *      These elements (from henceforth referred to as formrows) should contain input fields (input, texarea, etc).
 *      The validation rule that is applied to the formrow will find the appropriate input type, and validate it.
 *      Upon error, the className 'validation-failed' is applied to the formrow. It will look for a direct child with the
 *      classname 'error-msg' in the formrow and show the correct error message. Upon success, it will remove the
 *      error message and add a 'validation-success' classname to the formrow.
 *
 *      Formrows can also be nested, where both the outer and the inner formrows can have validators. See the example
 *      below.
 *
 * @Example:
 *      Template:
 *          <form data-bind="event: { submit: controller.onSubmit.bind(controller) }">
 *              <div data-validations="equal-to">
 *                  <div data-validations="required,minimum-length">
 *                      <p>Password</p>
 *                      <input type="text" name="password1" data-length="10"/>
 *                      <p class="error-msg"></p>
 *                  </div>
 *                  <div data-validations="required,minimum-length">
 *                      <p>Repeat password</p>
 *                      <input type="text" name="password2" data-length="10"/>
 *                      <p class="error-msg"></p>
 *                  </div>
 *                  <p class="error-msg"></p>
 *              </div>
 *              <div data-validations="required,email">
 *                  <p>E-mail</p>
 *                  <input type="text" name="email"/>
 *                  <p class="error-msg"></p>
 *              </div>
 *          </div>
 *
 *      Controller:
 *      	handleFormChange() {
 *      	    fv.FormValidator.validateForm(<HTMLFormElement> $(this.element).find('form')[0], false, (success:boolean) => {
 *      	        if (success == true) {
 *      	            // submit the form, etc.
 *      	        } else {
 *      	            alert('There are errors in the form!');
 *      	        }
 *      	    });
 *          }
 *
 */
define(["require", "exports"], function (require, exports) {
    "use strict";
    var ValidationRule = (function () {
        function ValidationRule(elementTypes, fn, message) {
            if (message === void 0) { message = ''; }
            this.message = message;
            this.fn = fn;
            this.elementTypes = elementTypes;
        }
        ValidationRule.prototype.validate = function (el, args, fn) {
            this.fn.call(null, el, args, fn);
        };
        return ValidationRule;
    }());
    exports.ValidationRule = ValidationRule;
    /**
     * FormValidator
     */
    var FormValidator = (function () {
        function FormValidator() {
        }
        FormValidator.addValidationRule = function (id, rule) {
            FormValidator.rules[id] = rule;
        };
        /**
         * Validates an element containing multiple form rows
         * @param el            {HTMLElement}   The element to validate (generally a <form> element)
         * @param applyStyles   {boolean}       If set to false, it won't add the validator CSS classes (error) and won't
         *                                      display the error messages.
         * @param fn            {Function}      The callback that is called when validation is complete
         */
        FormValidator.validateForm = function (el, applyStyles, fn) {
            if (applyStyles === void 0) { applyStyles = true; }
            if (fn === void 0) { fn = function () { }; }
            var $elements = $(el).find('[data-validations]');
            var validationSuccess = true;
            $elements.each(function (index, el) {
                FormValidator.validate(el, function (success, error) {
                    if (validationSuccess == true) {
                        validationSuccess = success;
                    }
                    if (applyStyles == true) {
                        if (success == true) {
                            $(el).removeClass('validation-failed');
                            $(el).addClass('validation-success');
                        }
                        else {
                            $(el).removeClass('validation-success');
                            $(el).addClass('validation-failed');
                            if (typeof error != 'undefined') {
                                $(el).find('.error-msg').text(error);
                            }
                        }
                    }
                });
            });
            fn(validationSuccess);
        };
        /**
         * Validates a single form row
         * @param el    the form row to validate. Should have a data-validations attribute
         * @param fn    the callback that is called when validation is complete, inclues a success boolean and a list of
         *              error messages
         */
        FormValidator.validate = function (el, fn) {
            if (fn === void 0) { fn = function () { }; }
            var errorMessages = [];
            var validationSuccess = true;
            var fieldRules = $(el).data('validations').split(',');
            for (var i = 0; i < fieldRules.length; i++) {
                var data = fieldRules[i].split('=');
                var ruleId = data[0];
                var args = [];
                if (typeof data[1] != 'undefined') {
                    args = data[1].split(',');
                }
                if (typeof FormValidator.rules[ruleId] != 'undefined') {
                    var input = $(el).find(FormValidator.rules[ruleId].elementTypes.join(',')).toArray();
                    FormValidator.rules[ruleId].validate(input, args, function (success, message) {
                        if (validationSuccess == true) {
                            validationSuccess = success;
                        }
                        if (typeof message != 'undefined' && success == false) {
                            errorMessages.push(message);
                        }
                    });
                }
            }
            fn(validationSuccess, errorMessages);
        };
        FormValidator.rules = {
            /**
             * Validates to false if the value of the field is empty, not checked or if there is no
             * radiobutton in the group selected.
             */
            'required': new ValidationRule(['input'], function (el, args, fn) {
                for (var i = 0; i < el.length; i++) {
                    if (el[i].type.toLowerCase() == 'checkbox') {
                        if (!el[i].checked) {
                            fn(false);
                            return;
                        }
                    }
                    else if (el[i].type.toLowerCase() == 'radio') {
                        var name = $(el[i]).attr('name');
                        if ($('[name=' + name + ']').filter(':checked').length == 0) {
                            fn(false, 'This is a required field');
                            return;
                        }
                    }
                    else {
                        if ($(el).val() == '' || $(el).val() == $(el).attr('placeholder')) {
                            fn(false, 'This is a required field');
                            return;
                        }
                    }
                    fn(true);
                }
            }),
            // This validator requires MomentJS. Moment is not loaded by default in Gaia.
            // Enable it first before using this validator.
            /*
            'date': new ValidationRule(['.formrow'], ( el, args, fn ) => {
                var day, month, year
    
                if ($(el).find('[data-name=day]').length > 0) {
                    day = $(el).find('[data-name=day]').data('value');
                    month = $(el).find('[data-name=month]').data('value');
                    year = $(el).find('[data-name=year]').data('value');
                } else {
                    day = $(el).find('[name=day]').val();
                    month = $(el).find('[name=month]').val();
                    year = $(el).find('[name=year]').val();
                }
    
                if (isNaN(day) || isNaN(month) || isNaN(year)) {
                    fn(false, 'Dit is geen correcte datum');
                    return;
                }
    
                // construct the date object
    
                var m = moment([day, month, year].join('-'), 'DD-MM-YYYY');
    
                if (m.isValid() == true) {
                    fn(true);
                } else {
                    fn(false, 'Dit is geen correcte datum');
                }
            } ),
            */
            /**
             * Validates to false if the value of the field is not a number (NaN) or is out of range
             *
             * Usage:
             *      <div data-validations="equal-to">
             *          <input type="text" data-min="1" data-max="10"/>
             *      </div>
             */
            'range': new ValidationRule(['input'], function (el, args, fn) {
                if (isNaN(parseInt($(el).val(), 10)) ||
                    parseInt($(el).val(), 10) <= parseInt($(el).attr('data-min'), 10) ||
                    parseInt($(el).val(), 10) >= parseInt($(el).attr('data-max'), 10)) {
                    fn(false);
                }
                else {
                    fn(true);
                }
            }),
            /**
             * Validates to false if the value of the field is not an e-mail address.
             */
            'email': new ValidationRule(['input'], function (el, args, fn) {
                if (!new RegExp('^[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$', 'i').test($(el).val()) ||
                    $(el).val() == $(el).attr('placeholder')) {
                    fn(false, 'This e-mail address is incorrect');
                }
                else {
                    fn(true);
                }
            }),
            /**
             * Validates to false if the values of the fields are not equal. Can contain any amount of fields
             *
             * Usage:
             *      <div data-validations="equal-to">
             *          <input type="text"/>
             *          <input type="text"/>
             *      </div>
             */
            'equal-to': new ValidationRule(['input'], function (el, args, fn) {
                var values = [];
                for (var i = 0; i < el.length; i++) {
                    var value = $(el[i]).val();
                    values.push(value);
                }
                var temp = values.slice(0).sort();
                if (temp[0] == temp[temp.length - 1]) {
                    fn(true);
                }
                else {
                    fn(false, 'The values do not match.');
                }
            }),
            /**
             * Validates to false if the value of the field is longer than what is allowed
             *
             * Usage:
             *      <div data-validations="minimum-length">
             *          <input type="text" data-length="10"/>
             *      </div>
             */
            'minimum-length': new ValidationRule(['input'], function (el, args, fn) {
                var value = $(el).val() || '';
                var length = parseInt($(el).attr('data-length'), 10) || 0;
                if ($(el).val() == '' ||
                    $(el).val() == $(el).attr('placeholder')) {
                    fn(false, 'The value is too long (max: ' + length + ')');
                }
                else {
                    if (value.length < length) {
                        fn(false, 'The value is too long (max: ' + length + ')');
                    }
                    else {
                        fn(true);
                    }
                }
            })
        };
        return FormValidator;
    }());
    exports.FormValidator = FormValidator;
});
