import { Text } from '@components/Text';

type StarRatingLabelProps = {
    labelText: string;
};

export const StarRatingLabel = ({ labelText }: StarRatingLabelProps) => {
    return (
        <Text size="s" weight="bold" fontFamily="monospace">
            {labelText}
        </Text>
    );
};
