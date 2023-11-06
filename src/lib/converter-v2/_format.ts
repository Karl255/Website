export type Stream = number[];

export type Encoder = (stream: Stream) => string;
export type Decoder = (format: string) => Stream;
export type Validator = (format: string) => boolean;

export interface Format {
	name: string;
	encode: Encoder;
	decode: Decoder;
	validate: Validator;
}
