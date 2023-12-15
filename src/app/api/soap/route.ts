import { soapTranslator } from '@/lib/typechat/soap';

interface StructureBody {
  text: string;
}

export async function POST(request: Request) {
  const body = (await request.json()) as StructureBody;

  try {
    const response =
      await soapTranslator.translate(`以下の本文は看護師と患者の回診の際の対話データです、これをSOAP記法に変換してください。
    ## 本文
    ## ルール
    ${body.text}
    - 対話は話者が識別されていない平文の状態で入力される
    - 対話は医師または看護師と患者の対話である
    - まず対話文を医師または看護師と患者のどちらが発話したのかを識別し、発話文を要約したものをSUMMARYとして出力する
    - 要約は会話の時系列順に並べる
    - 次に電子カルテの記法であるSOAP記法におけるSUBJECTIVEとOBJECTIVEとASSESSMENTとPLANについての情報をそれぞれSubject,Object,Assessment,Planとして抽出する
    - 簡潔な形として句読点を用いず、1つの要約項目に1つの内容を入れる
    - 抽出した文は簡潔な形であること （例: 頭痛がする）
    - 数値に関するデータは指摘しているときは数値のみを適切な符号をつける（例: 体温: 36.5)
    - と発言した、と述べている、と訴えているなどの説明口調を使用しない(頭痛がする)
    - 患者は、看護師がなどの誰が発言したかの情報を文の先頭に使用しない
    `);

    return Response.json(response);
  } catch (e) {
    console.log(e);
    return Response.json({ error: e }, { status: 500 });
  }
}
