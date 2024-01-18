import { AppContext } from "vue";
import _message from "./src/messageList.vue";
import MessageManager from "./src/instance";
import { MessageInstance, MessageItem, MessageType } from "./src/type";
export const isString = (data: any): boolean => typeof data === "string";

let msg: MessageManager;
const types = ["text", "success", "warning", "error", "loading"] as const;

const message = types.reduce((pre, value) => {
  pre[value] = (config: MessageInstance, appContext?: AppContext) => {
    // 直接传入消息提示内容的情况
    if (isString(config)) {
      config = { content: config as string } as MessageItem;
    }

    const _config: MessageItem = { type: value as MessageType, ...(config as MessageItem) };
    if (!msg) {
      msg = new MessageManager(appContext);
    }
    return msg!.add(_config as MessageItem);
  };
  return pre;
}, {} as any);

const Message = Object.assign({
  ...message,
  removeAll: () => {
    msg && msg.clear();
  },
});

export default Message;
