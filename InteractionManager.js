class InteractionManager{
    
    is_input_empty(input){
        /** 
        * @description This method checks whether or not the parameter is empty
        * @param {any} input 
        * @method is_input_empty
        * @returns {boolean} whether or not the parameter is empty
        **/
       return input == "";
    }

    is_input_too_long(input, length){
        /**
         * @description This method checks whether or not the input is too long 
         * @param {string} input 
         * @param {number} length 
         * @returns {string} whether or not the input is too long
         **/
        if(toString(input).length() > parseInt(length)){
            return Boolean.toString(true);
        }else{
            return Boolean.toString(false);
        }
    }

    is_string(input){
        /**
         * @param input 
         * @method is_string
         * @returns {boolean} whether or not the parameter is a string
        **/
        return typeof input == "string"; 
    }

    is_number(input){
        /**
         * @description This method checks if the parameter is a number
         * @param input 
         * @method is_number
         * @returns whether or not the parameter is a number
         */
        return input == typeof "number";
    }

    is_input_boolean(input){
        /** 
         * @param input 
         * @method is_input_boolean 
         * @returns whether or not the parameter is a boolean 
        **/
       return typeof input == "boolean";
    }
};
