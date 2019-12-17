type IntermediateResult = {
	input: string;
	output: string;
};

function stepByMatch(
	result: RegExpMatchArray,
	current: IntermediateResult,
	replacer: (result: RegExpMatchArray) => string
): IntermediateResult {
	return {
		...current,
		output: current.output + replacer(result),
		input: current.input.slice(result[0].length)
	};
}

function stepByFail(current: IntermediateResult): IntermediateResult {
	return {
		...current,
		output: current.output + current.input.slice(0, 1),
		input: current.input.slice(1)
	};
}

export type Replacer = (result: RegExpMatchArray) => string;

export type Processor = [RegExp, Replacer];

export const parseWith = (processors: Processor[]) => (s: string): string => {
	let input = s;
	let output = "";
	while (input.length > 0) {
		const current: IntermediateResult = {
			input,
			output
		};
		type Replacement = [RegExpMatchArray, Replacer];
		const winner: Replacement | null = processors.reduce(
			(acc: Replacement | null, [regex, replacer]) => {
				if (acc !== null) {
					return acc;
				} else {
					const result: RegExpMatchArray | null = input.match(regex);
					return result === null ? null : [result, replacer];
				}
			},
			null
		);
		if (winner !== null) {
			const [result, replacer] = winner;
			const next: IntermediateResult = stepByMatch(result, current, replacer);
			output = next.output;
			input = next.input;
		} else {
			const next: IntermediateResult = stepByFail(current);
			output = next.output;
			input = next.input;
		}
	}
	return output;
};
