import React from 'react'
import { toast } from 'react-toastify'

import { StyledForm, TextArea } from './form.styles'

interface FormProps {
    resolve: (did: string) => Promise<string | null>
}

const Form: React.FC<FormProps> = ({ resolve }) => {
    const [inputValue, setInputValue] = React.useState('')
    const [textAreaValue, setTextAreaValue] = React.useState('')

    const processDIDResolution = async (did: string): Promise<void> => {
        const diddoc = await resolve(did)

        if (diddoc == null) {
            toast.error('Invalid DID')
        } else {
            toast.success('DID Document found')
        }

        setTextAreaValue(diddoc != null ? JSON.stringify(diddoc, null, 4) : '')
    }

    const handleSubmit = (event: React.FormEvent): void => {
        event.preventDefault()

        void processDIDResolution(inputValue)
    }

    return (
        <div>
            <StyledForm onSubmit={handleSubmit}>
                <label>
                    <input
                        type="text"
                        value={inputValue}
                        onChange={(event) => setInputValue(event.target.value)}
                    />
                </label>
                <button type="submit">Submit</button>{' '}
            </StyledForm>
            <TextArea value={textAreaValue} />
        </div>
    )
}

export default Form
