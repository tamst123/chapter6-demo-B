import type { SerializedMessage, WebSocketMessage } from '../types';
export default class MessageInterpreter {
    private constructor();
    static send(message: WebSocketMessage): SerializedMessage;
    static receive(serializedMessage: SerializedMessage): WebSocketMessage;
}
