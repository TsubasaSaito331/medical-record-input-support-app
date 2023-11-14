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
    ${body.text}
    ## ルール
    - 電子カルテの記法であるSOAP記法におけるSUBJECTIVEとOBJECTIVEについての情報を抽出する
    - 医療方針の提案など主観客観的データ以外の発言も要約する
    - 数字に関係するデータは助詞を含まない単語の形式とする
    - 数字のデータには適切な記号を付与する
    ## 項目
    - SUBJECTIVE
    - OBJECTIVE
    `);

    return Response.json(response);
  } catch (e) {
    console.log(e);
    return Response.json({ error: e }, { status: 500 });
  }
}
