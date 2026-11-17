"use client";

import "@useblu/ocean-core/ocean.min.css";
import { useState } from "react";
import { Chips, InternalContextualHero, List, ListAction } from "@useblu/ocean-react";
import {
  Pix, PixOutline, ReceiptTax, ReceiptTaxOutline, TaxOutline, BarcodeOutline,
  CheckCircleOutline, DocumentTextOutline, ClockOutline,
} from "@useblu/ocean-icons-react";

// os tipos dos ícones são anteriores ao React 19; este helper só ajusta a tipagem
const ic = (C: unknown, size = 20) => { const I = C as React.ComponentType<{ size?: number }>; return <I size={size} />; };

/** Componentes reais do Ocean DS (pacotes @useblu do npm), não recriações. */
const tabIds = ["chips", "hero", "list", "icons"] as const;
type TabId = (typeof tabIds)[number];

const payment = [
  { label: "Pix", value: "pix" },
  { label: "Boleto", value: "boleto" },
  { label: "Transferência", value: "ted" },
  { label: "Tributos", value: "tributos" },
];

export default function OceanDemo({ tabLabels, label }: { tabLabels: string[]; label: string }) {
  const tabs = tabIds.map((id, i) => ({ id, label: tabLabels[i] }));
  const [tab, setTab] = useState<TabId>("chips");
  const [picked, setPicked] = useState<string>("Nenhum filtro aplicado");

  const onKey = (e: React.KeyboardEvent, i: number) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    const next = (i + (e.key === "ArrowRight" ? 1 : tabs.length - 1)) % tabs.length;
    setTab(tabs[next].id);
    document.getElementById(`ocean-tab-${tabs[next].id}`)?.focus();
  };

  return (
    <div className="ocean-demo">
      <div className="ocean-tabs" role="tablist" aria-label={label}>
        {tabs.map((t, i) => (
          <button
            key={t.id}
            id={`ocean-tab-${t.id}`}
            role="tab"
            type="button"
            aria-selected={tab === t.id}
            aria-controls={`ocean-panel-${t.id}`}
            tabIndex={tab === t.id ? 0 : -1}
            className="ocean-tab"
            onClick={() => setTab(t.id)}
            onKeyDown={(e) => onKey(e, i)}
          >
            {t.label}
          </button>
        ))}
      </div>

      <div className="ocean-canvas" role="tabpanel" id={`ocean-panel-${tab}`} aria-labelledby={`ocean-tab-${tab}`}>
        {tab === "chips" && (
          <div className="ocean-stage">
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              <Chips
                label="Forma de pagamento"
                multiChoice
                options={payment}
                filterLabel="Filtrar"
                clearLabel="Limpar"
                onConfirm={(v) => {
                  const arr = Array.isArray(v) ? v : [v];
                  setPicked(arr.length ? `Filtrando por: ${arr.map((x) => x.label).join(", ")}` : "Nenhum filtro aplicado");
                }}
                onClean={() => setPicked("Nenhum filtro aplicado")}
              />
              <Chips label="Pix" icon={ic(PixOutline, 16)} />
              <Chips label="Boleto" icon={ic(BarcodeOutline, 16)} />
            </div>
            <p className="ocean-hint" aria-live="polite">{picked}</p>
          </div>
        )}

        {tab === "hero" && (
          <div className="ocean-stage">
            <InternalContextualHero
              title="Cadastro em análise"
              description="Estamos validando os documentos da empresa. Você recebe um aviso quando terminar."
              listItems={[
                { icon: ic(CheckCircleOutline, 20), description: "Contrato social enviado" },
                { icon: ic(DocumentTextOutline, 20), description: "Procuração digital assinada" },
                { icon: ic(ClockOutline, 20), description: "Prova de vida pendente" },
              ]}
              actions={[{ label: "Fazer prova de vida", onClick: () => {} }]}
            />
          </div>
        )}

        {tab === "list" && (
          <div className="ocean-stage">
            <List style={{ background: "#ffffff", borderRadius: 12 }}>
              <ListAction title="Pix" description="Transferir ou pagar com QR Code" icon={ic(PixOutline)} showDivider />
              <ListAction title="Boleto" description="Pagar com código de barras" icon={ic(BarcodeOutline)} showDivider />
              <ListAction title="Tributos" description="DAS, DARF e guias estaduais" icon={ic(ReceiptTaxOutline)} />
            </List>
          </div>
        )}

        {tab === "icons" && (
          <div className="ocean-stage">
            <ul className="ocean-icons">
              {[
                ["Pix", Pix], ["PixOutline", PixOutline], ["ReceiptTax", ReceiptTax], ["ReceiptTaxOutline", ReceiptTaxOutline],
                ["TaxOutline", TaxOutline],
              ].map(([name, Icon]) => {
                return (
                  <li key={name as string}>{ic(Icon, 28)}<span>{name as string}</span></li>
                );
              })}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
