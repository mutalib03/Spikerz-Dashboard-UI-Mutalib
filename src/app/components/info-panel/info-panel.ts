import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoPanelData, MetadataItem } from '../../models/info-panel.types';
import { INFO_PANEL_TRANSLATION_KEYS, METADATA_VALUE_TYPES } from '../../constants/info-panel.constants';


@Component({
  selector: 'app-info-panel',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './info-panel.component.html',
  styleUrls: ['./info-panel.component.scss']
})
export class InfoPanel {
  @Input() data: InfoPanelData = {
    description: {
      title: 'Description',
      content: 'Lorem Ipsum Dolor Sit Amet Consectetur. Aenean Sodales Pellentesque Gravida Nibh Et Magna Faucibus. Dui Commodo Ut Metus Amet Egestas Habitant Viverra. Quisque Fusce Senectus Facilisis Non Diam Leo Nulla Sem Pellentesque. Sit In Vel Sed Cursus Metus Sit Fringilla Vestibulum.',
      translationKey: INFO_PANEL_TRANSLATION_KEYS.DESCRIPTION
    },
    metadata: {
      title: 'Extra',
      content:"Lorem ipsum dolor sit amet consectetur. Tempus a id adipiscing fames egestas tellus dis pretium tempus. Justo nisl nisl lorem lectus id ornare. Rhoncus in egestas in amet porttitor pellentesque sit. Amet gravida integer velit felis. Eu consectetur interdum auctor sed aliquam. Eu pulvinar accumsan sed id. Duis a aliquam eu quisque commodo lectus. Lectus ipsum velit purus viverra vulputate viverra in nunc nulla. Euismod rhoncus mauris urna orci gravida sagittis netus. Amet mus in vel etiam. Interdum habitant congue massa in etiam sit. Commodo nibh viverra lobortis augue lorem quam lorem suspendisse.",
      translationKey: INFO_PANEL_TRANSLATION_KEYS.METADATA,
      items: [
        { 
          key: 'Lorem Ipsum Dolor', 
          value: new Date('2017-10-19'), 
          type: METADATA_VALUE_TYPES.DATE ,
          translationKey: INFO_PANEL_TRANSLATION_KEYS.DATE_CREATED 
        },
        { 
          key: 'Lorem Ipsum Dolor', 
          value: 'Ut', 
          type: METADATA_VALUE_TYPES.TEXT,
          translationKey: INFO_PANEL_TRANSLATION_KEYS.STATUS 
        },
        { 
          key: 'Lorem Ipsum Dolor', 
          value: 'Eros', 
          type: METADATA_VALUE_TYPES.TEXT,
          translationKey: INFO_PANEL_TRANSLATION_KEYS.OWNER 
        },
        { 
          key: 'Lorem Ipsum Dolor', 
          value: true, 
          type: METADATA_VALUE_TYPES.BOOLEAN ,
          translationKey: INFO_PANEL_TRANSLATION_KEYS.VERIFIED 
        },
        { 
          key: 'Lorem Ipsum Dolor', 
          value: 'Sit', 
          type: METADATA_VALUE_TYPES.TEXT ,
          translationKey: INFO_PANEL_TRANSLATION_KEYS.LOCATION 
        },
        { 
          key: 'Lorem Ipsum Dolor', 
          value: 'Lorem Ipsum Dolor', 
          type: METADATA_VALUE_TYPES.TEXT,
          translationKey: INFO_PANEL_TRANSLATION_KEYS.CATEGORY 
        },
        { 
          key: 'Lorem Ipsum Dolor', 
          value: 'Lorem Ipsum Dolor', 
          type: METADATA_VALUE_TYPES.TEXT,
          translationKey: INFO_PANEL_TRANSLATION_KEYS.ENVIRONMENT 
        }
      ]
    }
  };

  protected getTranslatedText(key: string, fallback: string): string {
    return fallback;
  }

  protected formatValue(item: MetadataItem): string {
    switch (item.type) {
      case METADATA_VALUE_TYPES.DATE:
        if (item.value instanceof Date) {
          return item.value.toLocaleDateString('en-US', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit'
          });
        }
        return String(item.value);
      
      case METADATA_VALUE_TYPES.BOOLEAN:
        return item.value ? 'Yes' : 'No';
      
      case METADATA_VALUE_TYPES.STATUS:
        return String(item.value);
      
      default:
        return String(item.value);
    }
  }

  protected getValueClass(item: MetadataItem): string {
    const baseClass = 'info-panel__metadata-value';
    
    switch (item.type) {
      case METADATA_VALUE_TYPES.BOOLEAN:
        return `${baseClass} ${baseClass}--boolean ${item.value ? `${baseClass}--success` : `${baseClass}--error`}`;
      
      case METADATA_VALUE_TYPES.STATUS:
        return `${baseClass} ${baseClass}--status`;
      
      case METADATA_VALUE_TYPES.DATE:
        return `${baseClass} ${baseClass}--date`;
      
      default:
        return baseClass;
    }
  }

  protected trackByKey(index: number, item: MetadataItem): string {
    return item.key;
  }

  protected isBooleanType(item: MetadataItem): boolean {
    return item.type === METADATA_VALUE_TYPES.BOOLEAN;
  }
}