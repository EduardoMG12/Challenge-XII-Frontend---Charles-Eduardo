import { FormHelperText } from '@mui/material';

interface IPropsInputError {
    errorsMessage: string;
}

const InputError: React.FC<IPropsInputError> = ({ errorsMessage }) => {
    return (
        <FormHelperText error className="flex items-center justify-start w-1/2 gap-[0.375rem]">
            <img src="https://challengeuolpbcompass.s3.amazonaws.com/inputErrorIcon.svg" alt="Red round icon with a white exclamation point inside" />
            <p className="text-base">
                {errorsMessage}
            </p>
        </FormHelperText>
    );
};

export default InputError;