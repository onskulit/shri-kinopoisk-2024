import { Text } from '@components/Text';

type StarRatingLabelProps = {
    estimation: number;
};

export const StarRatingLabel = ({ estimation }: StarRatingLabelProps) => {
    return <Text size="xxs">{estimation}</Text>;
};
